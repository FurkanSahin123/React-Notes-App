import React from 'react'

function Header( { handleDarkModeToggle, darkMode} ) {
  return (
    <header>
      <div className='header-group'>
        <h3>Furkan Şahin</h3>
        <button 
        onClick={handleDarkModeToggle}
        className='mode-btn'>{darkMode ?"Light":"Dark"}</button>
      </div>  
    </header>
  )
}

export default Header