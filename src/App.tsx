import React, { FC, useState, useRef, useEffect }  from "react";
import TodoList from "./assets/components/TodoList/TodoList";
import { ITodo } from "./assets/interfaces/ITodo";
import TodoItem from "./assets/components/TodoItem/TodoItem";

const App: FC = () => {
  const [arrayOfTodos, setArrayOfTodos] = useState<ITodo[]>([]);
  const [addTodoInputValue, setAddTodoInputValue] = useState<string>('');
  const [todoCheckboxStatus, setTodoCheckboxStatus] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  function focuAddTodoInput(): void {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  useEffect((): void => {
    focuAddTodoInput();
  })

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setAddTodoInputValue(e.target.value);
  }

  function addTodo(): void {
    if (addTodoInputValue && addTodoInputValue.length > 2) {
      setArrayOfTodos([...arrayOfTodos, {
        id: Date.now(),
        taskText: addTodoInputValue,
        isComplete: todoCheckboxStatus,
      }]);
      setAddTodoInputValue('');
    } else {
      focuAddTodoInput();
    }
  }

  const addTodoOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e): void => {
    if (e.key === 'Enter') {
      focuAddTodoInput();
      addTodo();
    }
  }

  function removeTodo(id: number): void {
    setArrayOfTodos(arrayOfTodos.filter(todo => todo.id !== id));
  }

  const toggleTodoCheckbox = (todo: ITodo): void => {
    setTodoCheckboxStatus(todo.isComplete = !todo.isComplete);
  }

  return (
    <div className="app-body">
      <input
        type="text"
        value={addTodoInputValue}
        onChange={handleInputValue}
        onKeyDown={addTodoOnKeyDown}
        ref={inputRef}        
      />
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
          />
        )}
      </TodoList>
    </div>
  )
}

export default App;