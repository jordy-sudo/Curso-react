import React from "react";
import './TodoCounter.css'



function TodoCounter({total,completos}){
    return(
        <h2 className="TodoCounter">Has Completado {completos} de {total} todos</h2>
    );
}
export {TodoCounter}