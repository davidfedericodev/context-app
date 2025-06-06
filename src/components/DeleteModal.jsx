import { useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";

import Button from "./Button";

export default function DeleteModal({ onDelete, ref, setViewForm, setSelectedProject, ...props }) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => dialog.current.showModal(),
  }));

  function handleDelete() {
    onDelete();
    dialog.current.close();
    setViewForm(false);
    setSelectedProject(null);
  }

  return createPortal(
    <dialog ref={dialog} className="bg-white text-stone-900 rounded-md p-4 backdrop:bg-stone-900/50" {...props}>
      <h2 className="text-lg font-bold">Delete project</h2>
      <p className="text-sm text-stone-500">Are you sure you want to delete this project?</p>
      <form method="dialog" onSubmit={handleDelete} className="flex gap-2">
        <Button variant="danger" type="submit" width="100%">
          Delete
        </Button>
        <Button variant="outline" width="100%" onClick={() => dialog.current.close()}>
          Cancel
        </Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
}
