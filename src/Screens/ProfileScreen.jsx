import { View, Text, TouchableOpacity } from "react-native";
import GetuserLocation from "../app/location/getuserLocation";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <GetuserLocation />
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}
