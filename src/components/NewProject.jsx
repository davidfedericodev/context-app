import Button from "./Button";

export default function NewProject({ setProjects, setViewForm, setSelectedProject }) {
  const inputStyle = "border border-stone-900 rounded-md p-2 w-full";

  function handleSave(e) {
    e.preventDefault();
    const newProject = {
      id: crypto.randomUUID(),
      title: e.target.title.value,
      description: e.target.description.value,
      date: e.target.date.value,
      tasks: [],
    };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setViewForm(false);
  }
  return (
    <section className="col-span-2 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 w-full max-w-md">
        <h2 className="text-2xl font-bold">Add a new project</h2>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSave}>
          <div className="flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" className={inputStyle} required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">Description</label>
            <input type="text" id="description" name="description" className={inputStyle} required />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="date">Date</label>
            <input type="date" id="date" name="date" className={inputStyle} required />
          </div>

          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              width="100%"
              onClick={() => {
                setViewForm(false);
                setSelectedProject(null);
              }}
            >
              Cancel
            </Button>
            <Button variant="secondary" width="100%" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
