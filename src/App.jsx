import React from "react";
import { useState } from "react";
import {v4 as uuidv4} from 'react'
import "./index.css";





function App() {

  const [newEntry, setNewEntry] = useState("");
  const [newContact, setNewContact] = useState([])



   function handleSubmit(e) {
    e.preventDefault()

    setNewContact((currentContact) => {
        return [
          ...currentContact,
          {id: crypto.randomUUID(), title:newEntry}
        ]
    })
    setNewEntry("")
  }

  function handleRemove(id) {
     setNewContact((currentContacts) => 
     currentContacts.filter((contact) => contact.id !== id)
     );
  }
  
   console.log(newContact)

  return (
    <>
    <form>
      <div className='contact-style'>
        <h2 className = 'header'>Contact List !</h2>
         <p>Enter new Contact</p>
        <input type='text' id='new-contact' 
        value = {newEntry}
       onChange = {e => setNewEntry(e.target.value)} />
      <label htmlFor = 'new-contact'></label>
       <button className='btn-create' onClick = {handleSubmit}>Add</button>
       

        <h1 className = 'header'>Contacts</h1>

      <ol>
        {newContact.map(contact => {
          return (
          <li key = {contact.id}>
          <label>
            {contact.title}
          </label>
       
        <button id='btn-remove' onClick ={() => handleRemove(contact.id)}>Delete</button>
        </li>
          )
        })}
      </ol>
      </div>
    </form>
    </>
  );
}



export default App;
