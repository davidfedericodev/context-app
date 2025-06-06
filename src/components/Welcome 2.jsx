import Button from "./Button";

export default function Welcome({ setViewForm }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 col-span-2">
      <h2 className="text-2xl font-bold">No project selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button variant="secondary" onClick={() => setViewForm(true)}>
        Add a project
      </Button>
    </section>
  );
}
