import Button from "./Button";

export default function Tasks({ tasks, setProjects, selectedProjectId }) {
  const inputStyle = "border border-stone-900 rounded-md p-2 w-full";

  function handleAddTask(e) {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: e.target.task.value,
      isCompleted: false,
    };
    setProjects((prevProjects) => prevProjects.map((project) => (project.id === selectedProjectId ? { ...project, tasks: [...(project.tasks || []), newTask] } : project)));
    e.target.reset();
  }

  function handleCompleteTask(e) {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === selectedProjectId
          ? {
              ...project,
              tasks: project.tasks.map((task) => (task.id === e.target.id ? { ...task, isCompleted: !task.isCompleted } : task)),
            }
          : project
      )
    );
  }

  return (
    <>
      <form className="flex flex-col gap-2" onSubmit={handleAddTask}>
        <label htmlFor="task">Add a task</label>
        <input type="text" id="task" className={inputStyle} required />
        <Button variant="secondary" type="submit">
          Add
        </Button>
      </form>
      <h2 className="text-lg font-bold">Tasks</h2>
      {(!tasks || tasks.length === 0) && <p className="text-sm text-stone-500">No tasks</p>}
      {tasks && tasks.length > 0 && (
        <ul className="flex flex-col gap-2">
          {tasks.map((task) => (
            <li key={task.id} className="bg-white text-stone-900 border border-stone-200 p-4 rounded-md flex gap-4 justify-between items-center">
              <span className={`${task.isCompleted ? "line-through" : ""} truncate`}>{task.title}</span>
              <input type="checkbox" id={task.id} checked={task.isCompleted} onChange={handleCompleteTask} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
