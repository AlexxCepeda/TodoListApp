import React from 'react';
import PropTypes from 'prop-types';
import '../css/Todo.css';
import Checkmark from './Checkmark';

// class Todo extends React.Component {
//   render () {
//     return (
//       <div className={`list-item ${this.props.done ? 'done' : ''}`}>
//         Tarea
//         <div className="is-pulled-right">
//           <Checkmark done={this.props.done} />
//           <button className="delete is-pulled-right" />
//         </div>
//       </div>
//     )
//   }
// }

function Todo(props) {
  return (
    <div className={`list-item ${props.done ? 'done' : ''}`}>
      {props.text}
      <div className="is-pulled-right">
        <Checkmark
          done={props.done}
          index={props.index}
          onClickCheckmark={props.onClickCheckmark}

        />
        <button className="delete is-pulled-right"
          onClick={() => props.onClickCross(props.index)} />
      </div>
    </div>
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