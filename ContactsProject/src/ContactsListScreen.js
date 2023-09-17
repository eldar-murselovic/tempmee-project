import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import * as Contacts from 'expo-contacts';
import ContactsList from './ContactsList'; // Import your ContactsList component


export default function ContactsListScreen() {
    const [contacts, setContacts] = useState([]);

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

  return (
    <ScrollView>
      {contacts.map(contact => (
        <ContactsList key={contact.id} contact={contact} />
      ))}
    </ScrollView>
  );
}
