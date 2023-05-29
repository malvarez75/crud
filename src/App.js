import { isEmpty, size } from 'lodash'
import React, { useState } from 'react'
import shortid from 'shortid'


function App() {
  const [tarea, setTask] = useState("")
  const [listaTareas, setListaTareas] = useState([])
  
  const addtask = (e) => {
    e.preventDefault()
    if (isEmpty(tarea)){
      console.log('Tarea Vacía')
      return
    }
    
    const nuevaTarea = {
      id: shortid.generate(),
      name: tarea
    }
    setListaTareas([...listaTareas, nuevaTarea])
    setTask('')
  }

  const deletetask = (id) => {
    const tareasFiltradas = listaTareas.filter(tarea => tarea.id !== id)
    setListaTareas(tareasFiltradas)
  }

  return (
    <div className='container mt-5'>
      <h1>Tareas</h1>
      <hr/>
      <div className='row'>
        <div className='col-8'>
          <h4 className='text-center'>Lista de Tareas</h4>
          {
            size(listaTareas)>0 ? (
              <ul className='list-group'>
              {
                  listaTareas.map((tarea) =>(
                    <li className='list-group-item' key={tarea.id}>
                      <span className='lead'>{tarea.name}</span>
                      <button 
                        className='btn btn-danger btn-sm float-right mx-2'
                        onClick={() => deletetask(tarea.id)}
                      >Eliminar
                      </button>
                      <button 
                        className='btn btn-warning btn-sm float-right'
                      >Editar
                      </button>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <span className='text-center'><h5>No hay tareas pendientes</h5></span>
            )
          }
        </div>
        <div className='col-4'><h4 className='text-center'>Agregar Tarea</h4>
          <form onSubmit={addtask}>
            <input
              type='text'
              className='form-control mb-2'
              placeholder='Ingrese la tarea ...'
              onChange={(text) => setTask(text.target.value)}
              value={tarea}
            />
            <button 
              className='btn btn-dark btn-block'
              type='submit'
            >Crear</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
