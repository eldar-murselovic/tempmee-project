import React from 'react';
import { Text, ScrollView } from 'react-native';
import { appStyles } from '../styles/styles';
import { useRoute } from '@react-navigation/native';

export default function ContactDetails() {
    const route = useRoute();
    const contactDetails = route.params;
  
    return (
      <ScrollView style={[appStyles.contactDetailsBox]}>
        <Text style={appStyles.label}>First Name:</Text>
        <Text style={[appStyles.value, appStyles.name]}>{contactDetails.firstName}</Text>
        <Text style={appStyles.label}>Last Name:</Text>
        <Text style={[appStyles.value, appStyles.name]}>{contactDetails.lastName}</Text>
        <Text style={appStyles.label}>Phone Number:</Text>
        <Text style={[appStyles.value, appStyles.phone]}>{contactDetails.phoneNumbers[0].number}</Text>
        <Text style={appStyles.label}>Email address:</Text>
        <Text style={[appStyles.value, appStyles.email]}>{contactDetails.emails ? contactDetails.emails[0]?.email : "No email"}</Text>
        <Text style={appStyles.label}>Favorite contact:</Text>
        <Text style={[appStyles.value]}>{contactDetails.favorite ? 'YES' : 'NO'}</Text>
      </ScrollView>
    );
  }
