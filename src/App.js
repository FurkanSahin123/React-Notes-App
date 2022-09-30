import React, { useState , useEffect } from 'react'
import Header from './Components/Header'
import NotesList from './Components/NotesList'
import { nanoid } from 'nanoid'
import Searchbar from './Components/Searchbar'
const App = () => {
  const [searchText , setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [notes ,setNotes] = useState([]);

    useEffect(()=>{
      const savedNotes = JSON.parse(
        localStorage.getItem("notes-data")
      );

      if(savedNotes){
        setNotes(savedNotes);
      }
    },[])

    useEffect(()=>{
      localStorage.setItem("notes-data",JSON.stringify(notes));
    },[notes]);

    const addNote =(text, title)=>{
    const date = new Date();
    const newNote ={
        id:nanoid(),
        title:title,
        text:text,
        date: date.toLocaleDateString()
       }

    const newNotes = [...notes,newNote];
      setNotes(newNotes);
    }

    const deleteNote = (id)=>{
       const newNotes =  notes.filter((note)=>note.id !==id);
       setNotes(newNotes);
    }

    const handleDarkMode = ()=>{
      setDarkMode(!darkMode) 
    }

  return (
    <>
      <div className={`${darkMode&& "dark-mode"}`}>
        <Header 
        darkMode = {darkMode}
        handleDarkModeToggle = {handleDarkMode} />
        <Searchbar 
        handleSearchNote = {setSearchText} />
          <div className='container'>
              <NotesList
              handleDeleteNote = {deleteNote}
              handleAddNote = {addNote} 
              notes={notes.filter((note)=>
              (note.text).toLowerCase().includes(searchText)
              )} />
          </div>
      </div>
    </>
  )
}

export default App