import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HeaderBar from "./src/Base/Header/HeaderBar";

import HomeScreen from "./src/Screens/HomeScreen";
import MapsScreen from "./src/Screens/MapsScreen";
import ProfileScreen from "./src/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();

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
        }}
      />
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header() {
            return <HeaderBar />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
