import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Routes
import Home from '../views/Home';
import EditNote from '../views/EditNote';
// components
import ButtonAdd from '../components/ButtonRight';
import ButtonGoBack from '../components/ButtonLeft';

const { Navigator, Screen } = createStackNavigator();

export default () => (
  <Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#323232',
      },
      headerTintColor: '#e9e9e9',
      headerTitleAlign: 'center',
      headerTitleStyle: {
        elevation: 4,
        fontWeight: 'bold',
      },
    }}
  >
    <Screen
      options={{
        headerTitle: 'Suas Notas',
        headerRight: () => <ButtonAdd />,
      }}
      name="Home"
      component={Home}
    />
    <Screen
      options={{
        headerTitle: 'Crie Suas Notas',
        headerLeft: () => <ButtonGoBack />,
      }}
      name="EditNote"
      component={EditNote}
    />
  </Navigator>
);
