import React from 'react'

const Header = () => {
  return (
    <header style={{backgroundColor: "grey"}} className="pt-3 pb-3">
      {/* TODO: Add logo here */}
      <nav className="text-center d-flex p-2 justify-content-around">
        {/* TODO: Add Buttons to navigate to the other pages */}
        <h2 className="m-2">Link</h2>
        <h2 className="m-2">Link</h2>
        <h2 className="m-2">Link</h2>
      </nav>
    </header>
  )
}

export default Header