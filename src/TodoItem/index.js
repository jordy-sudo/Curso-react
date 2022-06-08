import React from 'react';
import './TodoItem.css'

function TodoItem(props) {
  /*const CompleteButton = ()=>{
    alert('La tarea a sido completada con exito '+ props.text);
  }*/
  /*const DeleteButton = ()=>{
    alert('La tarea a sido eliminada con exito '+props.text);
  }*/
  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}>
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      onClick={props.onDelete}>
        X
      </span>
    </li>
  );
}

export { TodoItem };