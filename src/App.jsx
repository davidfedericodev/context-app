import { useState } from "react";
import { ProjectContext } from "./store/project-context.jsx";

import Sidebar from "./components/Sidebar.jsx";
import Welcome from "./components/Welcome.jsx";
import NewProject from "./components/NewProject.jsx";
import Project from "./components/Project.jsx";

function App() {
  const [projects, setProjects] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  let view;
  if (viewForm && selectedProject === null) {
    view = <NewProject setProjects={setProjects} setViewForm={setViewForm} />;
  } else if (!viewForm && selectedProject !== null) {
    view = (
      <Project setViewForm={setViewForm} setSelectedProject={setSelectedProject} project={projects.find((project) => project.id === selectedProject)} setProjects={setProjects} />
    );
  } else {
    view = <Welcome setViewForm={setViewForm} />;
  }

  return (
    <>
      <ProjectContext.Provider value={[projects, setProjects]}>
        <main className="h-screen grid grid-cols-3 gap-4">
          <Sidebar projects={projects} setViewForm={setViewForm} setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
          {view}
        </main>
      </ProjectContext.Provider>
    </>
  );
}

export default App;
