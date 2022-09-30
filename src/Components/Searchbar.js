import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const Searchbar = ( {handleSearchNote} ) => {
  return (
    <div className='search-bar'>
         <FontAwesomeIcon icon={faMagnifyingGlass}className="search-icon"/>      
        <input type="text" 
        className='search'
        placeholder='Type to search...'
        onChange={(e)=>handleSearchNote(e.target.value)}
        />  
    </div>
  )
}

export default Searchbar