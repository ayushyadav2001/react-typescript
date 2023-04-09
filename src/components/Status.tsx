import { type } from 'os'
import React from 'react'
type StautusProps={
    // statusType:String
    statusType:"loading" | "datafetched" |"error"

}

const Status = (props:StautusProps) => {
    let statusMsg;
    if(props.statusType=="loading"){
        statusMsg="Loading";
    }
    else if(props.statusType=="datafetched"){
        statusMsg="Data Fetched Successfully";
    }
    else{
        statusMsg="Error Occurred Data Fetcheing ";

    }
  return (
    <div>
        <h2>{statusMsg}</h2>
        
    </div>
  )
}

export default Status