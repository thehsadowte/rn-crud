import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditPostScreen from '../screens/EditPostScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EditPost" component={EditPostScreen} />
      {/* Add more screens here if needed */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
