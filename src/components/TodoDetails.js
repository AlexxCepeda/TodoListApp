import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

function TodoDetails(props) {
  let { id } = useParams();
  id = parseInt(id, 10)
  const index = props.todos.findIndex(element => element.id === id);
  const todo = props.todos[index]
  return (
    <>
      <div className="card-header">
        <h1 className="card-header-title header">
          {todo && todo.text}
        </h1 >
      </div>
      <div className="list-wrapper">
        {
          todo && todo.details && todo.details.map((detail, i) =>
            <div key={i} className="list-item">
              {detail}
            </div>
          )
        }
      </div>
    </>
  )
}

TodoDetails.propTypes = {
  todos: PropTypes.array
};

export default TodoDetails;