import React from 'react'
import { useState } from "react"
import { ButtonAdd, ButtonReset, ContainerStyled, InputContainer, Tarea, ToDoContainer } from './ToDoStyles'
import { BsTrash3 } from 'react-icons/bs'


const ToDo = () => {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const HandleSubmit = (e) => {
    e.preventDefault()
    if(tarea === ''){
      alert('Debes ingresar una tarea')
      return
    }
  const tareaInput ={
    id: Date.now(),
    tarea: tarea,
  }
  const todasLasTareas = [tareaInput, ...tareas]
  setTareas(todasLasTareas)
  setTarea('')
  }
  
  const HandleChange = (e) =>{
    setTarea(e.target.value)
  }

  const HandleReset = (e) =>{
    const todasLasTareas = []
  setTareas(todasLasTareas)
  setTarea('')
  }

 const DeleteTarea= (id)=> {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

  return (
    <><ContainerStyled >
          <h1>Ingrese una tarea</h1>
        <InputContainer>
        <input type="text" 
        placeholder='Ingrese una tarea' 
        onSubmit={HandleSubmit}
        onChange={HandleChange} 
        value={tarea}/>
            <ButtonAdd type='submit' onClick={HandleSubmit}>Agregar</ButtonAdd>
            <ButtonReset type='button' onClick={HandleReset}>Reset</ButtonReset>
            
        </InputContainer>
        <ToDoContainer>
            {
              tareas.map(tarea =>(
                <Tarea key={tarea.id} id={tarea.id} tarea= {tarea}> 
                <div>{tarea.tarea}</div>
                 <BsTrash3 color='white' onClick={() => DeleteTarea(tarea.id)}/>
                
                </Tarea>
              ))
            }
      </ToDoContainer>
      </ContainerStyled>
      
     </>
  )
}

export default ToDo