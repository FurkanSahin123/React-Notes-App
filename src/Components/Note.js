import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className='note' key={id}>
        <div className="note-header">{title}</div>
        <div className="note-section">{text}</div>
        <div className="note-footer">
            <small>{date}</small>
            <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={()=>handleDeleteNote(id)}/>
        </div>
    </div>
  )
}

export default Note;