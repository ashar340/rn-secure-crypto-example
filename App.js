import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/HomeScreen';
import AsymmetricScreen from './src/AsymmetricScreen';
import SymmetricScreen from './src/SymmetricScreen';
import BiometryScreen from './src/BiometryScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'home';

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Asymmetric':
                iconName = focused ? 'lock-closed' : 'lock-closed-outline';
                break;
              case 'Symmetric':
                iconName = focused ? 'key' : 'key-outline';
                break;
              case 'Biometry':
                iconName = focused ? 'finger-print' : 'finger-print-outline';
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Asymmetric" component={AsymmetricScreen} />
        <Tab.Screen name="Symmetric" component={SymmetricScreen} />
        <Tab.Screen name="Biometry" component={BiometryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
