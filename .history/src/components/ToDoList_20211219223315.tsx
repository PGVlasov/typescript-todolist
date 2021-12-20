import React from "react";
import { IToDo } from "../interFaces";

type ToDoListProps = {
  todos: IToDo[];
  completeHandler: (id: number) => void;
  removeToDo: (id: number) => void;
};

export const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  completeHandler,
  removeToDo,
}) => {
  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault();

    removeToDo(id);
  };
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.complete) {
          classes.push("complete");
        }
        return (
          <li className={classes.join(" ")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => completeHandler(todo.id)}
              />
              <span>{todo.task}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => {
                  removeHandler(event, todo.id);
                }}
              >
                Delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
