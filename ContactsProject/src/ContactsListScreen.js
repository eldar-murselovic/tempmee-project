import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import Contact from './Contact';


export default function ContactsListScreen() {
    const [contacts, setContacts] = useState([]);
    const [favorite, setFavorite] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync();
        const contactsList = data.map(contact => ({
            ...contact,
            favorite: false
        }))
        contactsList.sort((a, b) => a.firstName.localeCompare(b.firstName));
        setContacts(contactsList);
      }
    })();
  }, []);

  const toggleFavorite = (contactId) => {
    const updatedContacts = contacts.map((contact) => {
      if (contact.id === contactId) {
        contact.favorite = !contact.favorite;
      } else {
        contact.favorite = false;
      }
      return contact;
    });
    
    const newFavorite = updatedContacts.find((contact) => contact.id === contactId && contact.favorite);
  
    setFavorite(newFavorite || null);
    setContacts(updatedContacts);
  };

  return (
    <ScrollView>
        {favorite && (
            <Contact key={favorite.id} contact={favorite} toggleFavorite={toggleFavorite} />
        )}
      {contacts.slice(0, 500).map((contact) => (
        <Contact key={contact.id} contact={contact} toggleFavorite={toggleFavorite} />
      ))}
    </ScrollView>
  );
}
