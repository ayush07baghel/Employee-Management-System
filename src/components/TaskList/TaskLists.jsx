import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="mt-10 w-full 
      flex gap-5 overflow-x-auto sm:overflow-visible 
      sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) return <AcceptTask key={idx} data={elem} />
        if (elem.newTask) return <NewTask key={idx} data={elem} />
        if (elem.completed) return <CompleteTask key={idx} data={elem} />
        if (elem.failed) return <FailedTask key={idx} data={elem} />
        return null
      })}
    </div>
  )
}

export default TaskList
