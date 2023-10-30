import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
    <div>
      <Skill skill="React" />
      <Skill skill="HTML+CSS" />
      <Skill />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span>{props.skill}</span>
    </div>
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
