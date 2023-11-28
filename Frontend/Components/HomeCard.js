import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeCard = () => {
    const navigation = useNavigation()
    const onPressHandler = () => {
        navigation.navigate("ProductDetails",{id:"1"})
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPressHandler}>
    <Image source={require('./../assets/images/shop1.webp')} style={styles.image}/>
    <Text style={styles.name} numberOfLines={2}>Laptop refref wgwege</Text>
    <Text style={styles.price}>$152</Text>
  </TouchableOpacity>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
    container:{
        width:120,
        flexDirection:"column",
       elevation:4,
        margin:4,
        height:200,
        borderRadius:8,
    },
    image:{
        height:"60%",
        width:"100%",
        padding:8,
        borderRadius:8
    },
    name:{
        fontWeight:"500",
        fontSize:18,
        textAlign:"justify",
        paddingHorizontal:8,

    },
    price:{
        fontWeight:"500",
        textAlign:"justify",

        paddingHorizontal:8,
        fontSize:18,
        color:'red'
    }
});
