import React from "react";
import Todo from "../models/todo";
import ToDoItem from "./ToDoItem";

const Todos: React.FC<{items: Todo[]}> = (props) => {
    return (
        <ul>
            {props.items.map(item =>
                <ToDoItem key={item.id} text={item.text}/>)}
        </ul>
    );
}

export default Todos;