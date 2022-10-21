import "./style.css";
import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTodoItem from "../EditTodoItem";
import EditIcon from "@mui/icons-material/Edit";

export default function TodoItem({
  todo,
  handleDelete,
  handleEdit,
  handleEditShow,
}) {
  return (
    <ListItem className="list-item" disablePadding>
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={todo.text} />

        <IconButton
          edge="end"
          aria-label="edit"
          onClick={() => {
            handleEdit(todo.id);
          }}
          // todo={todo}
          // handleEdit={handleEdit}
        >
          <EditTodoItem todo={todo} handleEdit={handleEdit} />
        </IconButton>

        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}
