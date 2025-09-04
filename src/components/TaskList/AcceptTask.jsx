import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-full p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-xs sm:text-sm px-2 sm:px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-xs sm:text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-lg sm:text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-xs sm:text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6 gap-2">
        <button className="bg-green-500 rounded font-medium py-1 px-2 text-xs sm:text-sm">Mark as Completed</button>
        <button className="bg-red-500 rounded font-medium py-1 px-2 text-xs sm:text-sm">Mark as Failed</button>
      </div>
    </div>
  )
}

export default AcceptTask
