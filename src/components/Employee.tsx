import { type } from "os"

type Employee={
    name:String,
    city:String,
    state:String,
    country:String
  }
const Employee = (props:Employee) => {
  return (
    <div>
        
        <h2>{props.name} is Living in {props.city} {props.state} {props.country} </h2>
    </div>
  )
}

export default Employee