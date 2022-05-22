import React from 'react';
import  {useState}  from 'react';
import styles from './todo.module.css'
import TodoItem from './TodoItem';


function Todo() {
    let [value,setValue]=useState("");
    const [todos,settodos]=useState([]);
    const onDelete=(id)=>{
        let newTodos=todos.filter((todo)=>todo.id!==id);
        settodos(newTodos);

    }

    const handlerChange=(e)=>{ 
        setValue(e.target.value);
        // console.log(e.target.value)/
    }
    
  return (
      <>
      <h1>Todo List</h1>
    <div>Todo
        <input  value={value}
        onChange={(e)=>{
            setValue(e.target.value)
        }}/>
        
        <button onClick={()=>{
            settodos([
                ...todos,{ id:Date.now(),value:value}
                
            
        ]);
        setValue('');
    }}
    
        >Add</button>
        <div >
{todos.map((todo)=>{
    return(
<TodoItem key={todo.id} todo={todo} onDelete={onDelete} color={'green'}/>
      
    // console.log(todo.value)
    )
})}
</div>

    
    </div>
    

    </>

  )
}

export default Todo;