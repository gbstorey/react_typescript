import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import ToDoItem from "./ToDoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.list}>
      {todosCtx.items.map((item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
