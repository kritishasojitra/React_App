

import React from 'react'

const Todoreandering = ({data,hdet,hupd}) => {
    console.log(data);
  return (
    <div>

      <div className="container mt-5 w-75">
      <table class="table text-center">
  
  <tbody>
    <tr>
      <td>
      <h6>{data.task}</h6>
      </td>
      <td>
        <p> {data.dis}</p>
      </td>
      <td>
        <h6>{data.iscomp ? "completed" : " not complete"}</h6>
      </td>
      <td>
      <button onClick={()=>hupd(data.id)} className="btn btn-warning">Edit</button>
      <button onClick={()=>hdet(data.id)} className='btn btn-danger ms-5'>Delete</button>  
      </td>
    </tr>
   
  </tbody>
</table>
      </div>
          
    </div>
  )
}

export default Todoreandering