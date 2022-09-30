import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
const NotesList = ({ notes , handleAddNote , handleDeleteNote}) => {
  return (
    <div className='notes-list'>
        <AddNote 
        handleAddNote={handleAddNote}
        />
        {notes.map((note)=>(
        <Note
        handleDeleteNote = {handleDeleteNote} 
        id={note.id} 
        title={note.title} 
        text={note.text} 
        date={note.date} 
        key={note.id}/>
        ))}
    </div>
  )
}
export default NotesList