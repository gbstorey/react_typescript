import React from "react";
import classes from "./ToDoItem.module.css";

const ToDoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  const clickHandler = () => {
    props.onRemoveTodo(props.id);
  };
  return (
    <li className={classes.item} onClick={clickHandler}>
      {props.text}
    </li>
  );
};

export default ToDoItem;
