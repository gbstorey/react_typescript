import React from "react";

const ToDoItem: React.FC<{text: string}> = (props) => {
    return <li>{props.text}</li>
}

export default ToDoItem;