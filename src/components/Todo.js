import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../css/Todo.css';
import Checkmark from './Checkmark';

function Todo(props) {
  return (
    <div className={`list-item ${props.done ? 'done' : ''}`}>
      <Link to={`/details/${props.index}`}>
        {props.text}
      </Link>
      <div className="is-pulled-right">
        <Checkmark
          done={props.done}
          index={props.index}
          onClickCheckmark={props.onClickCheckmark}

        />
        <button className="delete is-pulled-right"
          onClick={() => props.onClickCross(props.index)} />
      </div>
    </div >
  )
}

Todo.propTypes = {
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClickCheckmark: PropTypes.func.isRequired,
  onClickCross: PropTypes.func.isRequired
}

export default Todo;