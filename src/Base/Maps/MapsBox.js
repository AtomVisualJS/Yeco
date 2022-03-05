import { View, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

function MapsBox() {
  let position = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{
          width: "100%",
          height: 500,
        }}
        region={position}
      >
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title={"Marker Title"}
          description={"Marker Description"}
        />
      </MapView>
    </View>
  );
}

export default MapsBox;
