import {FC, ReactNode} from "react";
// import { ITodo } from "../../interfaces/ITodo";
// import {ITodoItem} from "../TodoItem/TodoItem.tsx";

interface ITodoList {
    children: ReactNode[]
}

const TodoList: FC<ITodoList> = ({children}) => {
    return (
        <ul className="todo-list">
            {children}
        </ul>
    )
}

export default TodoList;