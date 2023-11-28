import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const CategoryComponent = () => {
  return (
    <View style={styles.container}>
        <View>
            
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Home</Text>
        </View>

        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Hotels</Text>
        </View>

        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text} numberOfLines={2}>Shops fwefwe fwefwefwe fwef</Text>
        </View>
          <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text} numberOfLines={2}>Shops fwefwe fwefwefwe fwef</Text>
        </View>
        <View style={styles.item}>
            <Image source={require('./../assets/images/shop1.webp')} style={styles.image} />
            <Text style={styles.text}>Shops</Text>
        </View>
      
    </View>
  );
};

export default CategoryComponent;

const styles = StyleSheet.create({
    container:{
        maxHeight:250,
        flexDirection:'row',
        flexWrap:'wrap',
        marginVertical:8,
        paddingHorizontal:8,
        minHeight:120
    },
    title:{},
    item:{
        width:"20%",
        flexDirection:'column',
        padding:4,
        height:120,
    },
    image:{
        borderRadius:50,
        height:"70%",
    },
    text:{
        textAlign:"center",
        height:"30%"
    }
});
