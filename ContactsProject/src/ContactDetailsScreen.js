import React from 'react';
import { Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ContactDetails from './ContactDetails';

export default function ContactDetailsScreen() {
  const route = useRoute();
  const contactDetails = route.params; // Access the passed props

  return (
    <View>
      <ContactDetails 
        contact={contactDetails} />
    </View>
  );
}
