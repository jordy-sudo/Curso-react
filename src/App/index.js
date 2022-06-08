//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';


function useLocalStorage(itemName, initialValue){
  const localStorageTodos = localStorage.getItem(itemName)
  let parseItem;
  
  if(!localStorageTodos){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parseItem=[];
  }else{
    parseItem= JSON.parse(localStorageTodos);
  }

  const [item, setTodos] = React.useState(parseItem);

   //persistencia de datos
   const saveItem =  (newTodos)=>{
    const textoArray = JSON.stringify(newTodos);
    localStorage.setItem(itemName,textoArray);
    setTodos(newTodos)
  }

  return[
    item,
    saveItem
  ];
}



function App() {
   
  const [todos,saveTodos]=useLocalStorage('Todos_V1',[]);


  
  const [searchValue, setSearchValue]=React.useState('');

  const completos = todos.filter(completo => !! completo.completed).length;
  const totalTodos = todos.length;
  
  let buscarTodo=[];

  
  if(!searchValue.length >= 1){
    buscarTodo=todos
  }else{
    buscarTodo= todos.filter(completo =>{
      const textminuscula = completo.text.toLowerCase();//pongo en minusculas todo
      const busquedaMinusculas = searchValue.toLowerCase();
      return textminuscula.includes(busquedaMinusculas);
    } )
  }
 
  //para cambiar el estado de un componente

  const completeTodo = (text)=>{
    const index = todos.findIndex(todo => todo.text === text);
    const nuevoTodos = [...todos];
    nuevoTodos[index].completed = true
    saveTodos(nuevoTodos);
  }
  const deleteTodo = (text)=>{
    const index = todos.findIndex(todo => todo.text === text);
    const nuevoTodos = [...todos]
    nuevoTodos.splice(index,1)
    saveTodos(nuevoTodos);
  }




  return (  
   <AppUI
    totalTodos={totalTodos}
    completos={completos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    buscarTodo={buscarTodo}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}

   />
  );
}

export default App;
