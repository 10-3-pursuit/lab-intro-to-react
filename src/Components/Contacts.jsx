import React from 'react';
import ContactUserCard from './ContactUserCard';

const Contacts = () => {
  
  const contacts = [
    { id: 1, name: 'Emily', },
    { id: 2, name: 'HM',  },
    { id: 3, name: 'Best Friend',  },
  ];

  return (
    <div className="contacts">
      <h2>Contacts</h2>
      {contacts.map((contact) => (
        <ContactUserCard key={contact.id} user={contact} />
      ))}
    </div>
  );
};

export default Contacts;
