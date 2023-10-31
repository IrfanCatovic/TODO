import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const skillArray = skills;
<div>
  {skillArray.map((skill) => (
    <SkillList skillObj={skill} />
  ))}
</div>;

function Avatar() {
  return <img className="avatar" src="profil.jpg" alt="Irfan profilna" />;
}

function Intro() {
  return (
    <div>
      <h1>Irfan Catovic</h1>
      <p>
        With 25 years of age, I am a dynamic and multi-talented professional
        with a strong background of jobs a have done. I have honed my skills in
        software development, specializing in backend development with C# during
        nearly two years of dedicated work. Additionally, I possess a creative
        flair, having also served as a video editor and graphic designer,
        showcasing my ability to combine technical expertise with artistic
        sensibilities. My diverse skill set, coupled with a commitment to
        innovation and excellence, makes me a valuable asset to any team or
        project.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list" color="#123456">
      <Skill skill="React" emoji="☝" color="orangered" />
      <Skill skill="HTML+CSS" emoji="☝" color="yellow" />
      <Skill skill="Video editor" emoji="👶" color="red" />
      <Skill skill="JavaScript" emoji="💪" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
