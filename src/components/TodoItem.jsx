import React from 'react'
import styles from './todo.module.css'
import {useState} from "react";

function TodoItem({todo,onDelete,color}) {
    const [isCompleted,setisCOmpleted]=useState(todo.isCompleted)
  return (
    
    <div className={styles.todo} key={todo.id}>
    <input type="checkbox" checked={isCompleted} onChange={(e)=>{
        setisCOmpleted(e.target.checked)
    }} />
<div className={isCompleted ? styles.striked :""}  >{todo.value}</div>
<button onClick={()=>onDelete(todo.id)}>DELETE</button>
</div>

  )
}

export default TodoItem;