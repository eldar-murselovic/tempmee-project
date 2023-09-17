import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactsListScreen from './src/ContactsListScreen';
import ContactDetailsScreen from './src/ContactDetailsScreen';

const Stack = createStackNavigator();


export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen
          name="Contacts List"
          component={ContactsListScreen}
        />
        <Stack.Screen
          name="Contact Details"
          component={ContactDetailsScreen}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
