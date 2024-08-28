import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowseRouter as Router,Switch,Route} from "react-router-dom"; 
import Header from "./Header";
import AddContact from './AddContact';
import ContactList from './ContactList';
import { v4 as uuid } from "uuid";

function App() {
    const LOCAL_STORAGE_KEY="contacts";
    const [contacts, setContacts] = useState(
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
    );
  
   
  const addcontactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id: uuid(),...contact}]);
  }

  const removecontactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContacts) {
        setContacts(retrieveContacts);  // Directly set the retrieved contacts
    }
}, []);

  
  
  useEffect(()=>{
     
      localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));

  },[contacts]);

 
  

  return (
    <div className="ui container">
    <Header/>
    <AddContact addcontactHandler={addcontactHandler}/>
    <ContactList contacts={contacts} getContactId={removecontactHandler}/>
    </div>
     
  );
}

export default App;
