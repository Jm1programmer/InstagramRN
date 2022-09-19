import { StatusBar } from 'expo-status-bar';
import RoutesNavigation from './src/pages/routes'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
 
  return (
    <NavigationContainer>
        <RoutesNavigation />
    </NavigationContainer>
    
  );
}


