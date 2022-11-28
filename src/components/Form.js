import React from 'react';
import '../css/form.css';

const initState = "";

function Form(props) {
  const [value, setValue] = React.useState(initState);

  return (
    <form onSubmit={
      event => {
        event.preventDefault();
        if (value !== initState) {
          props.updateTodos({
            text: value,
            done: false,
          });

          setValue(initState);
        }
      }
    }>
      <input
        type='text'
        className='input'
        placeholder='Agrega una tarea'
        value={value}
        onChange={event => {
          setValue(event.target.value)
        }}
      />
      <button className='button'>Enviar</button>
    </form>
  )
};

export default Form;