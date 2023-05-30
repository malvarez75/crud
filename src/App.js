import { isEmpty, size } from 'lodash'
import React, { useState } from 'react'
import shortid from 'shortid'


function App() {
  const [tarea, setTarea] = useState("")
  const [listaTareas, setListaTareas] = useState([])
  const [editMode, seteditMode] = useState(false)
  const [idTarea, setidTarea] = useState("")
  const [error, seterror] = useState(null)

  const validForm = () => {
    let isValid = true
    seterror(null)

    if (isEmpty(tarea)){
      seterror('Debes ingresar una tarea')
      isValid = false
    }
    return isValid
  }
  const addtask = (e) => {
    e.preventDefault()
    if (!validForm()){
      return
    }
    
    const nuevaTarea = {
      id: shortid.generate(),
      name: tarea
    }
    setListaTareas([...listaTareas, nuevaTarea])
    setTarea('')
  }

  const savetask = (e) => {
    e.preventDefault()
    if (!validForm()){
      return
    }

    const TareasEditadas = listaTareas.map(item => item.id === idTarea ? {idTarea, name: tarea}: item)
    setListaTareas(TareasEditadas)
    seteditMode(false)
    setTarea('')
    setidTarea('')
  }

  const deletetask = (id) => {
    const tareasFiltradas = listaTareas.filter(eletarea => eletarea.id !== id)
    setListaTareas(tareasFiltradas)
  }

  const edittask = (parTarea) => {
    setTarea(parTarea.name)
    seteditMode(true)
    setidTarea(parTarea.id)
  }

  const recibirTarea = (texto) => {
    setTarea(texto)
    seterror(null)
  }

  const canceledit = () => {
    seterror(null)
    seteditMode(false)
    setidTarea('')
    setTarea('')
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
                  listaTareas.map((eletarea) =>(
                    <li className='list-group-item' key={eletarea.id}>
                      <span className='lead'>{eletarea.name}</span>
                      <button 
                        className='btn btn-danger btn-sm float-right mx-2'
                        onClick={() => deletetask(eletarea.id)}
                      >Eliminar
                      </button>
                      <button 
                        className='btn btn-warning btn-sm float-right'
                        onClick={() => edittask(eletarea)}
                      >Editar
                      </button>
                    </li>
                  ))
                }
              </ul>
            ) : (
              <li className='list-group-item'>No hay tareas pendientes</li>
            )
          }
        </div>
        <div className='col-4'>
          <h4 className='text-center'>
            {editMode ? "Editar" : "Agregar"} Tarea
          </h4>
          <form onSubmit={ editMode ? savetask : addtask}>
            <div className='row'>
              <input
                type='text'
                className='form-control mb-2'
                placeholder='Ingrese la tarea ...'
                onChange={(texto) => recibirTarea(texto.target.value)}
                value={tarea}
              />
              {
                error && <span className='text-danger mb-2'>{error}</span>
              }
            </div>
            <div className='row'>
              <div className={editMode ? 'col-6': 'col-12'}>
                <button 
                  className={editMode ? 'btn btn-warning btn-block':'btn btn-dark btn-block'}
                  type='submit'
                >{ editMode ? "Guardar" : "Agregar"}
                </button>
              </div>
              <div className='col-6'>
                {
                  editMode && <button 
                                className='btn btn-danger btn-block'
                                onClick={() => canceledit()}
                              >Cancelar</button>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
