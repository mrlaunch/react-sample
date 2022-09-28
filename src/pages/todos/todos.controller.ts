import { useState } from "react";

export const useTodosController = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState<string>("");
  const [updateIndex, setUpdateIndex] = useState<number>(-1);

  const create = () => {
    if (!text.trim()) {
      alert("Empty value is not allowed!");
      return;
    }
    setTodos([...todos, text]);
    setText("");
  };

  const update = (todo: string, index: number) => {
    if (!todo.trim()) {
      alert("Empty value is not allowed!");
      return;
    }
    const newVal = [...todos];
    newVal[index] = todo;
    setTodos(newVal);
    setText("");
    setUpdateIndex(-1);
  };

  const remove = (index: number) => {
    setTodos([...todos].filter((_, i) => i !== index));
  };

  return {
    todos,
    create,
    update,
    remove,
    text,
    setText,
    updateIndex,
    setUpdateIndex,
  };
};
