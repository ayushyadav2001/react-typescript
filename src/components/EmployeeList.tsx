import React from 'react'
type EmployeeListProps={
    empNames:{
        firstName:String,
        lastName:String
    }[]
}
const EmployeeList = (props:EmployeeListProps) => {
  return (
    <div>
        <h2>Employee List</h2>
        <ul>
             {props.empNames.map((name,index)=>{
                return(
                    <li key={index}>
                        {name.firstName} {name.lastName}
                        </li>
                )

             })}
        </ul>

    </div>
  )
}

export default EmployeeList