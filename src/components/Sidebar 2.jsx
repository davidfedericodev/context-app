import ProjectList from "./ProjectList";
import Button from "./Button";

export default function Sidebar({ projects, setViewForm, setSelectedProject, selectedProject }) {
  return (
    <aside className=" px-8 py-16 bg-stone-900 text-stone-50 md-w-72 rounded-r-xl">
      <h2 className="font-bold text-2xl">Your projects</h2>
      <div>
        <Button
          onClick={() => {
            setViewForm(true);
            setSelectedProject(null);
          }}
        >
          Add a project
        </Button>
      </div>

      <ProjectList projects={projects} setSelectedProject={setSelectedProject} selectedProject={selectedProject} />
    </aside>
  );
}
