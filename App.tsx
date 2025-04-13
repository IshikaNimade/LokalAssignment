import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { JobProvider } from './src/context/JobContext';

export default function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </JobProvider>
  );
}
