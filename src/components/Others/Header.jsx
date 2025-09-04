import React from 'react'

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
        <h1 className="text-xl sm:text-2xl font-medium">
          Hello <br />
          <span className="text-2xl sm:text-3xl font-semibold">
            {props.data?.email === "admin@me.com" ? "Admin" : props.data?.firstName || "Admin"} 👋
          </span>
        </h1>
        <button onClick={logOutUser} className="bg-red-600 text-base font-medium text-white px-4 sm:px-5 py-2 rounded-sm">
          Log Out
        </button>
    </div>
  )
}

export default Header
