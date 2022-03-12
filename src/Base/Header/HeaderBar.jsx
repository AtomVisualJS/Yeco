import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderBar() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.title}>Yecoom</Text>
          </TouchableOpacity>
          <View
            style={{
              marginLeft: "auto",
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileStack");
              }}
            >
              <AntDesign name="user" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    borderBottomColor: "black",
    borderBottomWidth: 0.25,
  },

  content: {
    marginTop: 50,
    flexDirection: "row",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
});
