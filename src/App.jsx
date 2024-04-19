import React from 'react'
import Todo from './components/Todo'

  const Todo = ({todo}) => {
 return (
  <div className='todo'>
    <div className='content'>
      <p>{toco.text}</p>
      <p className='category'>
       ({todo.category})</p>
          </div>
        <div>
       <button>Completar</button>
      <button>X</button>
     </div>
    </div>
      )
  }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=>(
          <Todo todo={todo}/>
         ))}
      </div>
      <TodoForm />
    </div>
  )
      







export default App
