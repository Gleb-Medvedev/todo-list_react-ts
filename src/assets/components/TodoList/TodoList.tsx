import {FC, ReactNode} from "react";

interface ITodoList {
    children: ReactNode[];
}

const TodoList: FC<ITodoList> = ({children}) => {
    return (
        <ul className="todo-list">
            {children}
        </ul>
    )
}

export default TodoList;