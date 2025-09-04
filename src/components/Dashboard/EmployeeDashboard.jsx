import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskLists'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-10 bg-[#1C1C1C] text-white">
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumbers data={props.data} />
        <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
