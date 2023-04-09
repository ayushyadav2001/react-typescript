import React from 'react'
type ParentonePorp={
    children:String
}
const Pareent1 = (props:ParentonePorp) => {
  return (
    <div>{props.children}</div>
  )
}

export default Pareent1