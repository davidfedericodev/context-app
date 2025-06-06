export default function ProjectList({ projects, setSelectedProject, selectedProject }) {
  return (
    <ul className="flex flex-col gap-2 mt-5">
      {projects.map((project) => (
        <li
          className={`p-4 rounded-md cursor-pointer transition-colors flex justify-between items-center ${
            project.id === selectedProject ? "bg-stone-600 text-stone-50" : "bg-stone-800 text-stone-50 hover:bg-stone-700"
          }`}
          key={project.id}
          onClick={() => setSelectedProject(project.id)}
        >
          {project.title}
          <span className="text-stone-400 text-sm">{project.date}</span>
        </li>
      ))}
    </ul>
  );
}
