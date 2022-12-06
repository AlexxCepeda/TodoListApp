import React from 'react';
import axios from 'axios';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
//import { element } from 'prop-types';

const URL = 'http://localhost:4000/todos';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = () => {
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(response => setTodos([...response, ...todos]));
    axios.get(URL).then(response => setTodos([...response.data]))
  }

  const updateTodo = (id, body) => {
    // fetch(`${URL}/${id}`, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify(body)
    // })
    //   .then(response => response.json())
    //   .then(response => {
    //     const newTodos = [...todos];
    //     console.log(newTodos)
    //     const index = newTodos.findIndex(element => element.id === response.id);
    //     if (index === -1) return;
    //     newTodos[index].done = !newTodos[index].done;
    //     setTodos(newTodos);
    //   })
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

  const updateTodos = todo => {
    axios.post(URL, todo).then(response => setTodos([...todos, response.data]))
  }

  const deleteTodo = id => {
    axios.delete(`${URL}/${id}`)
      .then(() => {
        const index = todos.findIndex(element => element.id === id);
        //if (index === -1) return;
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
        <Header todos={todos} />
        <TodoList
          todos={todos}
          onClickCheckmark={updateTodo}
          onClickCross={deleteTodo}
        />
        <Form updateTodos={updateTodos} />
      </div>
      {error}
    </div>
  );
}

export default App;