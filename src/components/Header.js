import React from 'react';
import '../css/header.css';

function Header(props) {
  return (
    <div className="card-header try">
      <h1 className="card-header-title header">
        Hay {props.todos.length} tareas
      </h1>
    </div>
  )
};

export default Header;