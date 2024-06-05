import { useState } from "react";
import "./Todo.css"





function Todo(){

   let [arr,setArr]=useState([])
   const [work,setWork] = useState("")

   const handleClick=() => {

      let obj={
         task:work,
         iscomp:false,
      }
      console.log(obj);

       setArr([...arr,obj])
   }
   // console.log(arr);
return(
   <div className="todo1">
      <div className="todo2">
        <div className="to1">
            <h2>Todo Application</h2>
        </div>
        <div className="to2 border border-secondary  border-opacity-25">
        <div className="input-group mb-3 w-75 mt-3 text-center">
         <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-book"></i></span>
         <input type="text" className="form-control" onChange={(el)=>setWork(el.target.value)}></input>
      </div>
      <button class="btn w-50" onClick={handleClick}>Add Today Task</button>
        </div>
        </div>
        <div className="to3">
         <div className="to4 border border-secondary  border-opacity-25">
            <h2>TodoList</h2>
         </div>
         <div className="to5">
           {
            arr.map((el)=>{
               return(
                  <div className="to6 w-100 border border-secondary  border-opacity-25 mt-3">
                     <div className="t1">
                     <h4 className="mt-1 ms-5 fw-bold">{el.task}</h4>
                     <span className=" ms-5">  {el.iscomp ? "completed":"not completed"}</span>
                     </div>
                     <div className="t2">
                     <i className="fa-solid fa-pen-to-square"></i>
                     <i className="fa-solid fa-trash"></i>
                     </div>
                  </div>
               )
            })
           }
         </div>
        </div>
   </div>
)
}

export default Todo;