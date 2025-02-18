import { FC, useState } from "react";
import TodoList from "./assets/components/TodoList/TodoList";
import { ITodo } from "./assets/interfaces/ITodo";
import TodoItem from "./assets/components/TodoItem/TodoItem";
import React from "react";

const App: FC = () => {
  const [arrayOfTodos, setArrayOfTodos] = useState<ITodo[]>([]);
  const [addTodoInputValue, setAddTodoInputValue] = useState('');
  const [todoCheckboxStatus, setTodoCheckboxStatus] = useState(false);

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setAddTodoInputValue(e.target.value);
  }

  function addTodo(): void {
    setArrayOfTodos([...arrayOfTodos, {
      id: Date.now(),
      taskText: addTodoInputValue,
      isComplete: todoCheckboxStatus,
    }])
  }

  function removeTodo(id: number): void {
    console.log(id);
    setArrayOfTodos(arrayOfTodos.filter(todo => todo.id !== id));
  }

  const toggleTodoCheckbox = (todo: ITodo) => {
    setTodoCheckboxStatus(todo.isComplete = !todo.isComplete);
    console.log(todo);
  }

  return (
    <div className="app-body">
      <input type="text" value={addTodoInputValue} onChange={handleInputValue} />
      <button onClick={addTodo}>Добавить дело</button>
      <TodoList>
        {arrayOfTodos.map(todo =>
          <TodoItem
            key={todo.id}
            taskText={todo.taskText}
            id={todo.id}
            isComplete={todo.isComplete}
            removeTodo={() => removeTodo(todo.id)}
            toggleTodoCheckbox={() => toggleTodoCheckbox(todo)}
        />)}
      </TodoList>
    </div>
  )
}

export default App;