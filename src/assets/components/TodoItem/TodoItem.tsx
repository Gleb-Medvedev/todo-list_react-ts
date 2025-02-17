import { FC } from "react";
import { ITodo } from "../../interfaces/ITodo";


const TodoItem: FC<ITodo> = ({taskText, removeTodo}) => {
    return (
        <li className="todo-list__item">
            <input type="checkbox" />
            {taskText}
            <button type="button" onClick={removeTodo}>Удалить задачу</button>
        </li>
    )
}

export default TodoItem;