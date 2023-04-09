import React from 'react';

import './App.css';
import Welcome from './components/Welcome';
import Welcomees6 from './components/Welcomees6';
import Employee from './components/Employee';
import EmployeeList from './components/EmployeeList';
import Status from './components/Status';
import Pareent1 from './components/Pareent1';
import ParentTwon from './components/ParentTwon';
import UseStateSimple from './hooks/UseStateSimple';

const employee={
  name:"Ayush Yadav",
  city:"Ahemdabad",
  state:"Gujrat",
  country:"India"
}

const employeeList=
[
{
  firstName:"Ayush"
  ,lastName:"Yadav"
},
{
  firstName:"Vikash"
  ,lastName:"Tripathi"
},  
{
  firstName:"Chandan"
  ,lastName:"Kr Shamra"
},
{
  firstName:"Nikhil"
  ,lastName:"Kumar"
}
]
function App() {
  return (
    <div className="App">
      {/* <Welcome/>
      <Welcomees6 firstName="Ayush" lastName="Yadav" age={21} isDrivingAllowed={true} />
      <Welcomees6 firstName="John" lastName="Doe"  isDrivingAllowed={false} />
      <Employee name={employee.name} city={employee.city} state={employee.state} country={employee.country} />
      <hr/> */}
      {/* <EmployeeList empNames={employeeList}  /> */}

      <hr />

      {/* <Status statusType={"loading"}/> */}
      {/* <Status statusType={"datafetched"}/> */}
      {/* <Status statusType={""}/> */}
      {/* <hr /> */}
      {/* <Pareent1>This is Some Text From App Component</Pareent1>
      <hr />
      <ParentTwon>
        <Pareent1>This is From Parent</Pareent1>
      </ParentTwon> */}
      <UseStateSimple/>
    </div>


  );
}

export default App;
