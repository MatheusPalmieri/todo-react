import "./style.css";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import EditIcon from "@mui/icons-material/Edit";

export default function EditTodoItem({ todo, handleEdit }) {
  const [open, setOpen] = React.useState(false);
  const [task, setTask] = React.useState(todo.text);

  const handleEditShow = () => {
    setOpen(!open);
  };

  const handleSave = () => {
    handleEdit(todo.id, task);
    setOpen(!open);
  };

  return (
    <div>
      <EditIcon className="icon" onClick={handleEditShow} />
      <Dialog
        className="modal"
        open={open}
        onClose={handleEditShow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit To-Do"}</DialogTitle>
        <DialogContent>
          <input
            className="input-edit"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditShow}>Cancel</Button>
          <Button onClick={handleSave} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
