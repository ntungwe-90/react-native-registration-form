import React from "react";
import { FlatList, View, StyleSheet, TextInput } from "react-native";
import { Octicons } from "@expo/vector-icons";
import Cats from "./components/Cats";

const PetScreen = () => {
  cats = [
    {
      name: "Snoopy",
      type: "Cat",
      age: "5 years old",
      location: "Australia",
      photo: require("./assets/minu.jpg"),
    },
    {
      name: "Selena",
      type: "cat",
      age: "8 years old",
      location: "Bahamas",
      photo: require("./assets/pastel.jpg"),
    },
    {
      name: "Minou",
      type: "Dog",
      age: "1 years old",
      location: "Frankfurt",
      photo: require("./assets/cuppy.jpg"),
    },

   
  ];

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Search here"
          style={styles.searchBar}
        />
      </View>

      <FlatList
       
        showsVerticalScrollIndicator={false}
        data={cats}
        renderItem={({ item }) => {
          return (
            <Cats
              name={item.name}
              age={item.age}
              location={item.location}
              photo={item.photo}
            />
          );
        }}
        keyExtractor={(item) => item.age}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#e6ebe6",
    flex: 1,
  },

  

  searchBar: {
    fontSize: 18,
    paddingLeft: 10,
    marginVertical: 20,
    width: "95%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },
});


export default PetScreen;
