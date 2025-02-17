import { FC } from "react";
import { ITodo } from "../../interfaces/ITodo";

// interface ITodoList extends ITodo {
//     todos: ITodo[];
// }

const TodoList: FC<ITodo[]> = ({children}) => {
    return (
        <ul className="todo-list">
            {children}
        </ul>
    )
}

export default TodoList;