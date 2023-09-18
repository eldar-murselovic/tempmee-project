import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Contact({ contact, toggleFavorite }) {
    const navigation = useNavigation();

    const goToDetails = () => {
        navigation.navigate('Contact Details', contact); 
    };

    const toggle = () => {
        toggleFavorite(contact.id);
    }

  return (
    <TouchableOpacity onPress={goToDetails}>
        <View style={[appStyles.contactBox, appStyles.contactBoxList]}>
        <View>
        <Text style={appStyles.contactsTextPrimary}>{contact.firstName} {contact.lastName}</Text>
        {contact.phoneNumbers && contact.phoneNumbers.length > 0 && contact.phoneNumbers[0] && (
        <Text style={appStyles.contactsTextSecondary}>{contact.phoneNumbers[0].number}</Text>
        )}
        </View>
        <View>
        <TouchableOpacity 
                    onPress={toggle}
                    style={[appStyles.favoriteButton, contact.favorite ? appStyles.favoritedContact : null ]}>
                        <Ionicons name="star" size={24} color="gold" />
        </TouchableOpacity>
        </View>
        </View>
    </TouchableOpacity>
  );
}
