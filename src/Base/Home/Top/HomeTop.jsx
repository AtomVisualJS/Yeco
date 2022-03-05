import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
export default function HomeTop() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.messageBienvenue}
      
      >Bienvenue Paul</Text>
    <View style={styles.menuview}>
      <TouchableOpacity>
        <View style={styles.menubox}>
          <Text style={styles.menutext}>À proximité</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={styles.menubox}>
          <Text style={styles.menutext}>Catégories</Text>
       
       
      </View> 
       </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.menubox}>
          <Text style={styles.menutext}>Entreprise</Text>
        
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.searchbox}>
      <FontAwesome name="search" size={24} color="black" />
        
      </View>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    paddingTop: 30,
    justifyContent: "center",
    paddingBottom: 20,
    
  },

  messageBienvenue: {
    fontSize: 20,
    
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 20,
  },

  menuview: {
    
    
    flexDirection: "row",
    
  },

  menubox: {
    backgroundColor: "white",
    opacity: 0.8,
    borderColor: "black",
    borderWidth: 1,
    width: 100,
    alignItems: "center",
    borderRadius: 15,
    padding: 7,
    justifyContent: "center",
    marginLeft: 7,
  },


  searchbox: {
    backgroundColor: "white",
    opacity: 0.8,
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    alignItems: "center",
    borderRadius: 15,
    padding: 5,
    justifyContent: "center",
    marginLeft: 10,
  },

  menutext: {
    fontSize: 15,
    fontWeight: "bold",
  
  
  }




});
