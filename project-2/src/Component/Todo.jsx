
import React, { useState } from 'react'
import './Todo.css'
import Todoreandering from './Todoreandering'

const Todo = () => {


  const [state,setState] = useState(false)
  const [task,setTask] = useState("")
  const [dis,setDis] = useState("")
  const [arr,setArr] = useState([])


  const handleclick=()=>{
    
    let obj={
      id : Date.now(),
      task: task,
      dis:dis,
      iscomp:false
    }
    // console.log(obj)

    setArr([...arr,obj])
  } 


  console.log(arr);
  const handleDelete = (id)=>{
    let d = arr.filter((el)=>{
      return el.id != id
    })
    setArr(d)
  }
  
  const handleUpdate=(id)=>{
      let d=arr.map((el)=>{
        if (el.id==id)
          {
            return {...el,iscomp : !el.iscomp}
          }
          else{
            return el
          }
      })
      setArr(d)
  }

   const toggleState=()=>{
    setState(!state)
   }

  return (
    <div>
      {
        !state ?
        <div className="todo1">
            <div className="todo2">
                <h3 className='mt-4'>Todo Appliction</h3>
            </div>
            <div className='border border-secondary p-2 border-opacity-25 form'>
            <input type="text" placeholder="Todo Title" className='border border-secondary p-2 border-opacity-25' onChange={(el)=>setTask(el.target.value)}/>
            <input type="text" placeholder=" Description" className='border border-secondary p-2 border-opacity-25' onChange={(el)=>setDis(el.target.value)}/>
            <button className="btn btn-primary ms-5" onClick={handleclick}>Create Task</button>
            <button className="btn btn-primary ms-5" onClick={toggleState}>Show Task</button>
            </div>
        </div> :
        <div>
            
        {
         arr.map((el)=>{
         return  <Todoreandering key={el.id} data={el}  hdet={handleDelete} hupd={handleUpdate}/>
         })
        }
        <button className="btn btn-secondary fw-bold btn1" onClick={toggleState}>Back</button>
        </div>

      }
        
      
    </div>
  )
}   

export default Todo