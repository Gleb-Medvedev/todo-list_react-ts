import React, { FC } from "react";
import { ITodo } from "../../interfaces/ITodo";

export interface ITodoItem extends ITodo {
    removeTodo: React.MouseEventHandler<HTMLButtonElement>;
    toggleTodoCheckbox:  React.ChangeEventHandler<HTMLInputElement>;
}

const TodoItem: FC<ITodoItem> = ({taskText, removeTodo, toggleTodoCheckbox}) => {
    return (
        <li className="todo-list__item">
            <input type="checkbox" onChange={toggleTodoCheckbox} />
            {taskText}
            <button type="button" onClick={removeTodo}>Удалить задачу</button>
        </li>
    )
}

export default TodoItem;