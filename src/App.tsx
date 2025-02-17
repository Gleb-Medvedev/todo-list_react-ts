import { FC, useState } from "react";
import TodoList from "./assets/components/TodoList/TodoList";
import { ITodo } from "./assets/interfaces/ITodo";
import TodoItem from "./assets/components/TodoItem/TodoItem";

const App: FC = () => {
  const [arrayOfTodos, setArrayOfTodos] = useState<ITodo[]>([]);
  const [addTodoInputValue, setAddTodoInputValue] = useState('');

  // function changeInputValue: React.ChangeEventHandler<HTMLInputElement>(e) { // для ивента не устанавливается тип, если это декларативный способ
  //   setAddTodoInputValue(e.target.value)
  // }

  const handleInputValue: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
    setAddTodoInputValue(e.target.value)
  }

  function addTodo(): void {
    setArrayOfTodos([...arrayOfTodos, {
      id: Date.now(),
      taskText: addTodoInputValue,
      isComplete: false,
    }])
  }

  function removeTodo(id: number): void {
    console.log(id);
    setArrayOfTodos(arrayOfTodos.filter(todo => todo.id !== id));
  }

  return (
    <div className="app-body">
      <input type="text" value={addTodoInputValue} onChange={handleInputValue} />
      <button onClick={addTodo}>Добавить дело</button>
      <TodoList>
        {arrayOfTodos.map(todo => <TodoItem 
          key={todo.id} 
          taskText={todo.taskText} 
          id={todo.id} 
          isComplete={todo.isComplete} 
          removeTodo={() => removeTodo(todo.id)}
        />)}
      </TodoList>
    </div>
  )
}

export default App;