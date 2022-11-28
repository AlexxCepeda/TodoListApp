import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = React.useState([]);

  const changeDoneOnTodo = index => {
    const newTodos = [...todos];

    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  }

  const updateTodos = todo => {
    setTodos([todo, ...todos]);
  }
  const deleteTodo = index => {
    const head = todos.slice(0, index);
    const end = todos.slice(index + 1);
    setTodos([...head, ...end])
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Header todos={todos} />
        <TodoList
          todos={todos}
          onClickCheckmark={changeDoneOnTodo}
          onClickCross={deleteTodo}
        />
        <Form updateTodos={updateTodos} />
      </div>
    </div>
  );
}

export default App;