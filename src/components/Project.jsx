import { useRef } from "react";
import Tasks from "./Tasks";
import Button from "./Button";
import DeleteModal from "./DeleteModal";

export default function Project({ project, setProjects, setViewForm, setSelectedProject }) {
  const deleteModal = useRef();

  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <div className="flex flex-col gap-4 ">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          <p className="text-sm text-stone-500">{project.description}</p>
          <p className="text-sm text-stone-500">{project.date}</p>
          <p className="text-sm text-stone-500">{project.tasks.length}</p>
        </div>
        <Button variant="danger" onClick={() => deleteModal.current.open()}>
          Delete project
        </Button>
      </div>

      <DeleteModal
        ref={deleteModal}
        setViewForm={setViewForm}
        onDelete={() => setProjects((prevProjects) => prevProjects.filter((p) => p.id !== project.id))}
        setSelectedProject={setSelectedProject}
      />
    </section>
  );
}
