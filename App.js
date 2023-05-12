import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { AuthProvider } from './src/context/authContext';

//import { StatusBar } from 'expo-status-bar';

import RootNavigation from './src/screen/root.navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}