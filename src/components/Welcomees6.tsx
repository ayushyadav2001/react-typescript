import React from 'react'

type Welcomeprops={
    firstName:String,
    lastName:String,
    age?:number,
    isDrivingAllowed:boolean
}
const Welcomees6 = (props:Welcomeprops) => {
  return (
    <div>
        <h2>Welcome {props.firstName} {props.lastName}  In react type Script </h2>
        <h3>{props.isDrivingAllowed? `you are ${props.age} year old you are aloowed to drive` :`You are ${props.age} you are not allowed to drive`}</h3>
    </div> 
  )
}

export default Welcomees6