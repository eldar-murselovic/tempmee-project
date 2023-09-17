import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { appStyles } from '../styles/styles';
import { useRoute } from '@react-navigation/native';

export default function ContactDetails() {
    const route = useRoute();
    const contactDetails = route.params; // Access the passed props
  
    return (
      <View>
        <Text>{JSON.stringify(contactDetails, null, 2)}</Text>
      </View>
    );
  }
