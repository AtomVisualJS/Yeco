import { Image, TouchableOpacity, ScrollView, View, Text, StyleSheet} from "react-native";
import { Avatar } from "react-native-elements";

export default function HomeMiddle({ products }) {
  return (
    <View>
      {products.map((product) => (
        
        <View key={product.id} style={styles.box}>
          <View>
            <TouchableOpacity>
              <View style={styles.avatar}>
                <Avatar
                  rounded
                  size="medium"
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
              </View>
              <Text style={styles.textSoiety}>{product.society}</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal={true}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: product.image_products,
                }}
                style={{
                  width: 150,
                  height: 100,
                }}
              ></Image>
              <Image
                source={{
                  uri: product.image_products,
                }}
                style={{
                  width: 150,
                  height: 100,
                  marginLeft: 10,
                }}
              ></Image>
                            <Image
                source={{
                  uri: product.image_products,
                }}
                style={{
                  width: 150,
                  height: 100,
                  marginLeft: 10,
                }}
              ></Image>
              <Image
                source={{
                  uri: product.image_products,
                }}
                style={{
                  width: 150,
                  height: 100,
                  marginLeft: 10,
                }}
              ></Image>
            </View>
          </ScrollView>
          <View>
            <Text style={styles.textPrice}>{product.price}€</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: "black",
    borderWidth: 1,

    marginBottom: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "white",
    opacity: 0.9,
  },

  avatar: {
    marginLeft: 10,
    marginTop: 10,
  },

  textPrice: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
    marginBottom: 10,
    marginLeft: "80%",
  },

  textSoiety: {
    fontWeight: "bold",
  },
});
