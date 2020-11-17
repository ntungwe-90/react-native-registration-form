import React, { Component } from 'react';
import  {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
          this.state = {
            email:"",
            password:"",
             email:"",
             comfirmpassword:""
            
          };
        }

    render() {
        return (
            <ScrollView style={styles.container}>
           <View style={styles.loginTextContainer}>
               <Text style={styles.loginText}>Log in</Text>
           </View>
          <View>
        <TextInput style={styles.input}
        placeholderTextColor="#aaaaaa"
         placeholder="username"
         value={this.state.username}
         onChangeText={(username) => {
             this.setState({ username });
         }}
         
         />
         <TextInput style={styles.input}
        placeholderTextColor="#aaaaaa"
         placeholder="email"
         value={this.state.email}
         onChangeText={(email) => {
             this.setState({ email });
         }}
         
         />

        <TextInput style={styles.input}
         placeholderTextColor="#aaaaaa"
         secureTextEntry={true}
         placeholder="password"
         value={this.state.password}
     onChangeText={(password) =>{ 
       this.setState({password})
       
     }} />

<TextInput style={styles.input}
         placeholderTextColor="#aaaaaa"
         secureTextEntry={true}
         placeholder=" comfirmpassword"
         value={this.state.comfirmpassword}
     onChangeText={(comfirmpassword) =>{ 
       this.setState({comfirmpassword})
       
     }} />



        <Text style={styles.forgotPassword}>forgot password?</Text>
          </View>

          <View>
          <TouchableOpacity style= {styles.buttonContainer}>
          <Text style= {styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          </View >
          <View style={styles.noAccountContainer} >
          <Text style={styles.noAccountText}>Dont have an account?</Text>
          <Text style={styles.signupText}>Sign up</Text>
          </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
 container:{
     marginHorizontal:50
 },
 loginText:{
 fontSize:50,
 color:"#5100ad",
 fontWeight:"bold"
 },
 loginTextContainer:{
     marginBottom:30
 },
 input:{
     borderBottomWidth:2,
     borderBottomColor: "#5100ad",
     fontSize: 20,
     height:50,
     marginTop: 20
 },
 forgotPassword:{
     alignSelf:"flex-end",
     marginVertical:3,
     color: "#0853a8"

 },
 buttonContainer:{
     height:50,
     backgroundColor: "#5100ad",
     justifyContent:"center",
     alignItems:"center",
     borderRadius:10,
     marginVertical:50
 },
 buttonText:{
     color:"white",
     fontSize:25,
     fontWeight:"bold"

 },
 noAccountContainer:{
     flexDirection:"row",
     justifyContent:"center"
 },
 noAccountText:{
     marginRight:10,
     fontSize:16
 },
 signupText:{
    fontSize:16,
    color: "#5100ad"

 }
})

