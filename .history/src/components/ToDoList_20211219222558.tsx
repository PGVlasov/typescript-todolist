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
  return (
    <ul>
      {todos.map((todo) => {
        const classes = ["todo"];
        if (todo.complete) {
          classes.push("complete");
        }
        return (
          <li className={classes.join("")} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => completeHandler(todo.id)}
              />
              <span>{todo.task}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
