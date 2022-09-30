import React from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import 'animate.css';
const AddNote = ( {handleAddNote} ) => {
  const [modal, setModal] = useState(false);
  const [noteText , setNoteText] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const characterLimit = 200;

    const handleChange = (e)=>{
      if(characterLimit - e.target.value.length >=0){
        setNoteText(e.target.value);
      }
      else{
      }
      
    }
    const handleTitleChange = (e)=>{
      setNoteTitle(e.target.value);
    }
    const toggleModal = () =>{
      setModal(!modal);
    };

    const handleSaveClick = (e) =>{
      if(noteText&&noteTitle){
      handleAddNote(noteText , noteTitle);
      setNoteText("");
      setNoteTitle("");
      toggleModal();
      }
      else{
        e.target.className = "save-btn animate__animated animate__shakeX";
        setTimeout(()=>{
          e.target.className = "save-btn";
        },3000);
      }
    }

  return (
    <div className='note new-note'>
        <div className='add-note-btn'>
          <FontAwesomeIcon icon={faPlus} onClick={toggleModal}/>
        </div>
        {modal && (
            <>
             <div className='add-new-note'>
                <div className='add-note'>
                  <div className='note-container'>
                    <input 
                    type="text" 
                    placeholder="Title for note"
                    className='note-header'
                    onChange={handleTitleChange}/>
                    <textarea  
                    cols="8" 
                    rows="10" 
                    placeholder='Type to add a note.'
                    value={noteText}
                    onChange={handleChange}>
                    </textarea>
                    <small>{characterLimit - noteText.length} Remaining</small>
                    <button onClick={handleSaveClick}className="save-btn">Save</button>
                    <button onClick={toggleModal}>Cancel</button>
                  </div>
                </div>
              </div> 
            </>
        )}
    </div>
    
  )
}

export default AddNote