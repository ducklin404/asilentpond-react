import "./App.css";
import ProjectDisplay from "./components/project_display";
import projectData from "./data/projects.json";

export default function App() {
  return (
    <div>
      <img className="logo" src="./duck.webp" alt="duck logo" />
      <h1>A Silent Pond</h1>
      <div id="description">
        <p>Hey, I'm Duck. Hope these resources could help you!</p>
      </div>

      <div id="projects-display">
        {projectData.categories.map((category, index) => (
          <div key={index} className="project-category">
            <h2>{category.name}</h2>
            <div className="projects">
              {category.projects.map((project, projIndex) => (
                <ProjectDisplay
                  key={projIndex}
                  id={project.id}
                  imageUrl={project.imageUrl}
                  imageAlt={project.imageAlt}
                  projectTitle={project.projectTitle}
                  videoUrl={project.videoUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
