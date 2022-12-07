import React from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';


import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import { URL } from './constants';
import TodoDetails from './TodoDetails';
import NotFound from './NotFound';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getTodos();
    // eslint-disable-next-line
  }, []);

  const getTodos = () => {
    axios.get(URL).then(response => setTodos([...response.data]))
  }

  const updateTodo = (id, body) => {
    axios.patch(`${URL}/${id}`, body)
      .then(response => {
        const newTodos = [...todos];
        const index = newTodos.findIndex(element => element.id === response.data.id);
        if (index === -1) return;
        newTodos[index].done = !newTodos[index].done;
        setTodos(newTodos);
      }).catch(error => {
        if (error.code === "ERR_NETWORK") {
          setError('Error nuestro, estamos trabajando para arreglarlo!')
        }
        setTimeout(() => {
          setError(null);
        }, 2000)
      })
  }

  const createTodo = todo => {
    axios.post(URL, todo).then(response => setTodos([...todos, response.data]))
  }

  const deleteTodo = id => {
    axios.delete(`${URL}/${id}`)
      .then(() => {
        const index = todos.findIndex(element => element.id === id);
        const head = todos.slice(0, index);
        const end = todos.slice(index + 1);
        setTodos([...head, ...end])
      }).catch(error => {
        if (error.code === "ERR_NETWORK") {
          setError('Error nuestro, estamos trabajando para arreglarlo!')
        }
        setTimeout(() => {
          setError(null);
        }, 2000)
      })
  }

  return (
    <div className="wrapper">
      <div className="card frame">
        <Routes>
          <Route path="/" element={
            <>
              <Header todos={todos} />
              <TodoList
                todos={todos}
                onClickCheckmark={updateTodo}
                onClickCross={deleteTodo}
              />
              <Form createTodo={createTodo} />
            </>} />
          <Route path='/details/:id' element={<TodoDetails todos={todos} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      {error}
    </div>
  );
}

export default App;