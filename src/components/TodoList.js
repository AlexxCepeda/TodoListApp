import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import '../css/TodoList.css';

function TodoList(props) {
  return (
    <div className="list-wrapper">
      {
        props.todos.map((element, i) =>
          <Todo
            key={i}
            text={element.text}
            done={element.done}
            index={i}
            onClickCheckmark={props.onClickCheckmark}
            onClickCross={props.onClickCross}
          />)
      }
    </div>
  )
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onClickCheckmark: PropTypes.func.isRequired,
  onClickCross: PropTypes.func.isRequired
}

export default TodoList;