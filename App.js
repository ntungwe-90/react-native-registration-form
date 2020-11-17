import React, { Component } from "react";
import { Text, View, StyleSheet, TextInput, button, TouchableOpacity} from 'react-native';
import LoginScreen from './LoginScreen';
import ContactsScreen from './ContactsScreen';
import Contact from './components/Contact'



class App extends Component{
 constructor(props){
   super(props)
     this.state = {
       email:"",
       password:"",
       names:["dorcas", "sahada", "fiona", "sussan", "nanaya", "rachel"]
     }
   }
 





  render(){
    return (
    <View style={styles.container}>
      {/* <ContactsScreen /> */}
      <ContactsScreen />


    {/* <TextInput style={styles.input}
     placeholder="email"
     autoCapitalize="none" 
     autoCorrect={false}
     value={this.state.email}
     onChangeText={(email) =>{ 
       this.setState({email})
       
     }}
     />

<TextInput style={styles.input}
     placeholder="password"
     autoCapitalize="none" 
     autoCorrect={false}
     secureTextEntry={true}
     value={this.state.password}
     onChangeText={(password) =>{ 
       this.setState({password})
       
     }} />

    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.button}>login</Text>
    </TouchableOpacity> */}

  </View>
    );

  }
}




const styles = StyleSheet.create({
  container:{ 
    marginTop:100
  },
  input:{
  backgroundColor:"green",
  height:60,
  marginLeft:15,
  marginBottom:5

  },
  button:{
    color:"white",
    fontSize:20

  },
  buttonContainer:{
    marginHorizontal:20,
    backgroundColor:"blue",
    height:35,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5

  }
});


export default App;