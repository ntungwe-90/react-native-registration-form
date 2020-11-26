import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

export default function Cats({ name, type, age, location, photo }) {
  return (
    
    <View style={[styles.info]}>
     
     
     <Image source={photo} style={styles.image}/>
     

      <View style={styles.profileInfo}>
        <Text style={styles.catName}>{name}</Text>

        <Text style={styles.details}>{type}</Text>

        <Text style={styles.details}>{age}</Text>

        <View style={[styles.location, styles.details]}>
          <EvilIcons name="location" size={26} color="grey" />
          <Text style={styles.Textlocation} numberOfLines={1}>
            {location}
          </Text>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    height: 200,
    elevation: 8,
  },


  image: {
    height: 200,
    width: 150,
    borderRadius: 20,
  },

  catName: {
    color: "#4e15ab",
    fontSize: 29,
    fontWeight: "bold",
  },

  profileInfo: {
    justifyContent: "center",
    backgroundColor: "white",
    height: 150,
    width: 180,
    paddingBottom: 5,
    paddingLeft: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },

  details: {
    color: "#adadad",
    fontSize: 18,
  },

  location: {
    flexDirection: "row",
    paddingTop: 5,
    color: "grey",
    fontSize: 18,
    width: 120,
    margin:0,
    padding:0,
  },

  Textlocation: {
    color: "grey",
    fontSize: 18
  },
});