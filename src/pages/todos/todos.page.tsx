import { FC } from "react";
import { TodosProps } from "./todos.props";
import "./styles.css";
import { useTodosController } from "./todos.controller";

export const TodosPage: FC<TodosProps> = () => {
  const {
    text,
    setText,
    create,
    todos,
    remove,
    updateIndex,
    setUpdateIndex,
    update,
  } = useTodosController();

  return (
    <div className="p-4">
      <h1>Todos</h1>

      <div className="todo-header">
        <input
          type="text"
          placeholder="Input To-Do item here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <span
          className="addBtn"
          onClick={() => {
            if (updateIndex >= 0) {
              update(text, updateIndex);
            } else {
              create();
            }
          }}
        >
          {updateIndex >= 0 ? "Update" : "Add"}
        </span>
      </div>

      <ul className="todo-list-box">
        {todos.map((todo, index) => (
          <li key={index} className="todo-list-item flex">
            <span
              className="flex-1"
              onClick={() => {
                setText(todo);
                setUpdateIndex(index);
              }}
            >
              {todo}
            </span>
            <span className="close" onClick={() => remove(index)}>
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
