import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ContactDetails from './ContactDetails';

export default function ContactDetailsScreen() {
  const route = useRoute();
  const contactDetails = route.params;

  return (
    <View>
      <ContactDetails 
        contact={contactDetails} />
    </View>
  );
}
