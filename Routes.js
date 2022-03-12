import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HeaderBar from "./src/Base/Header/HeaderBar";

import HomeScreen from "./src/Screens/HomeScreen";
import MapsScreen from "./src/Screens/MapsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Register from "./src/Screens/ProfileDetails/Register";




const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const ProfileStackScreen = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
>

</Stack.Screen>
    <Stack.Screen
      name="Register"
      component={Register}
/>
  </Stack.Navigator>
);





export default function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header() {
            return <HeaderBar

            />;
          },
          tabBarIcon: () => (
            <FontAwesome name="home" size={26} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
          tabBarIcon: () => (
            <FontAwesome name="map-signs" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStackScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
          tabBarIcon: () => (
            <AntDesign name="user" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




