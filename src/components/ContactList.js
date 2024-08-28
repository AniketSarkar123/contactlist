import React from 'react'
import ContactCard from './ContactCard';

const ContactList=(props)=>{
    console.log(props);
    const deleteContactshandler=(id)=>{
        props.getContactId(id);
    }
    const renderContactList=props.contacts.map((contact)=>{
        return(
            <ContactCard 
            contact={contact}
            clickHandler={deleteContactshandler}
            key={contact.id}/>
        )
    });
    return(
        <div className="ui ceiled list">
           {renderContactList}
        </div>
    );
}

export default ContactList;