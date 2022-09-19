
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FeedInsta from './Instagramfeed/FeedApp'
import LoginScreen from './LoginScreen/LoginApp'

const Stack = createNativeStackNavigator();

export default function RoutesNavigation() {
 
    return (
     
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Login'>
          <Stack.Screen name="Feed" component={FeedInsta} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      
      
    );
  }