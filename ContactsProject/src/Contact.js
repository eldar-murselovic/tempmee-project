import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

export default function Contact({ contact }) {
    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate('Contact Details', contact); 
    };

  return (
    <TouchableOpacity onPress={goToDetails}>
        <View style={appStyles.contactBox}>
        <Text style={appStyles.contactTextBold}>{contact.firstName} {contact.lastName}</Text>
        <Text>{contact.phoneNumber}</Text>
        </View>
    </TouchableOpacity>
  );
}
