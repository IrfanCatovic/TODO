import React, { useEffect, useState } from "react";
export default function App() {
  const [usersWithPosts, setUsersWithPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users and posts in parallel
  useEffect(() => {
    async function fetchData() {
      try {
        const [usersRes, postsRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/posts"),
        ]);

        const [users, posts] = await Promise.all([
          usersRes.json(),
          postsRes.json(),
        ]);

        // Merge posts into their corresponding users
        const combined = users.map((user) => ({
          ...user,
          posts: posts.filter((post) => post.userId === user.id),
        }));

        setUsersWithPosts(combined);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Users and Their Posts</h2>
      <ul>
        {usersWithPosts.map((user) => (
          <li key={user.id} style={{ marginBottom: "20px" }}>
            <h3>{user.name}</h3>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <h4>Posts:</h4>
            <ul>
              {user.posts.map((post) => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
