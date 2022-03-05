import { View, Text, ImageBackground, ScrollView } from "react-native";
import HomeMiddle from "./Middle/HomeMiddle";
import HomeTop from "./Top/HomeTop";

import { useState, useEffect } from "react";

import getProducts from "../../../api/products/getProducts";

export default function HomeContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  console.log("HomeContent", products);

  return (
    <View>
      <ImageBackground
        source={require("../../../assets/bg.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <ScrollView>
        <HomeTop />
        <HomeMiddle products={products} /></ScrollView>
      </ImageBackground>
    </View>
  );
}
