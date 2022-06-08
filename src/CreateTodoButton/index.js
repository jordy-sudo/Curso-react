import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const CreateButton = ()=>{
        alert('Este es el boton de crear ');
    }
  return (
    <button 
        className="CreateTodoButton" 
        onClick={CreateButton}  
    >
        +
    </button>
  );
}

export { CreateTodoButton };