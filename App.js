import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreatePostScreen from './screens/CreatePostScreen';
import EditPostScreen from './screens/EditPostScreen';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="new-message" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="EditPostScreen"
          component={EditPostScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="arrow-redo" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
