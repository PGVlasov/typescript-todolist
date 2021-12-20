import { useState } from "react";

interface ToDoFormProps {
  addToDo(userInput: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [userInput, setUserInput] = useState("");
  return;
  <div className="input-field mt2">
    <input
      type="text"
      value={userInput}
      placeholder="введите значение"
      onChange={changeHandler}
    />
  </div>;
};
