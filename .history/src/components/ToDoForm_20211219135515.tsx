import { useState } from "react";

interface ToDoFormProps {
  addToDo(userInput: string): void;
}

export const ToDoForm: React.FC = (props) => {
  const [userInput, setUserInput] = useState("");
  return;
  <div className="input-field mt2">
    <input type="text" />
  </div>;
};
