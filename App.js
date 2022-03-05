import { StatusBar } from "expo-status-bar";

/// Routes
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
