import * as React from 'react';
import { useState } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View,StyleSheet, Switch} from "react-native"
import { RadioButton } from 'react-native-paper';
import Login from './Login';
import Register from './Register';

function Account({ navigation }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [checked, setChecked] = React.useState('first');
    const [isLogin, setIsLogin] = useState(true)
    const [isRegister, setIsRegister] = useState(false);
    const[title, setTitle] = useState("Sign In")

    
            //  <View style={styles.headerContainer}>
            // <Text style = {styles.headerTextStyle}>ShiftSoft Inc.</Text>
            // </View>
    return (
        <View  style={styles.accountContainer}> 
           



            <View style={styles.contentContainer}>
                
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>{ title }</Text>
                </View>
                <View style={styles.mainAccountContainer}>
                               
                    <View style={styles.regLoginContainer}>
                        

                        <View style={styles.mainContentContainer}>
                            <View style={styles.regLoginPage}>
                        
                            <View style={styles.switchContainer}>
                                <RadioButton
                                value="second"
                                status={ checked === 'second' ? 'checked' : 'unchecked' }
                                        onPress={() => {
                                            setChecked('second')
                                            setIsRegister(true)
                                            setIsLogin(false)
                                            setTitle("Sign Up")
                                      
                                }}
                            />
                            </View>                           
                            <View style = {{flexDirection:"row"}}>
                                    <Text style={{ fontWeight: 'bold', color: "black", fontSize: 16, marginRight: 6 }}>Create Account</Text>
                                    <Text style = {{fontSize:16}}> New to ShiftSoft ?</Text>
                            </View>                         
                            </View>
                            {isRegister && (<Register/>)}
                           
                            
                            
                        </View>
                        <View style={styles.mainContentContainer}>
                        <View style={styles.regLoginPage}>
                            <View style={styles.switchContainer}>
                                <RadioButton
                                    value="first"
                                    status={ checked === 'first' ? 'checked' : 'unchecked' }
                                        onPress={() => {
                                             setChecked('first')
                                              setIsRegister(false)
                                            setIsLogin(true)
                                            setTitle("Sign In")
                                           
                                        }
                                           }
                                />
                            </View>                          
                                <View style = {{flexDirection:"row"}}>
                                    <Text style = {{fontWeight:'bold', color:"black", fontSize: 16, marginRight:10}}>Sign In</Text>
                                 <Text  style = {{fontSize:16}}> Already have Account ?</Text>
                            </View>


                            <View>
                                </View>
                               
                            
                            </View>
                             {isLogin && (<Login/>)}
                        </View>



















                    </View>











                    <View style={styles.conditionContainer}>

                             <Text style = {{fontSize:16, color:"blue",}}>Terms </Text>

                        <Text style = {{fontSize:16, marginHorizontal:10}}>and</Text>
     
                             <Text style={{ fontSize: 16, color: "blue", }}>Conditions</Text>


                    </View>
                </View>
                
            </View>
            
        </View>

        
    )
}
const styles = StyleSheet.create({
    accountContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
       
    },
    headerContainer: {
        height: 55,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "black",
        borderRadius:10,
        shadowOpacity: 0.36,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation:1


    },
    headerTextStyle: {
        color: "black",
        fontSize: 22,
        fontWeight:'bold'
    },
    contentContainer: {
        flex: 1,
        width: "100%",
        margin: 1,
        alignItems: "center",
        shadowColor: "black",
        borderRadius:10,
        shadowOpacity: 0.36,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation:1
    },
    regLoginContainer: {
        marginTop:3,
        width: "98%",
        height: "87%",
        marginBottom:2,
        alignItems: "center",
        // justifyContent: "center",
        shadowColor: "black",
        borderRadius:10,
        shadowOpacity: 0.36,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation: 1,
  
        
    },
    welcomeContainer: {
        height: "8%",
        width: "95%",
        alignItems: "baseline",
        justifyContent: "center",
        paddingLeft:"9%"
        
        
    },
    conditionContainer: {
        height: "10%",
        width: "95%",
        margin: 0,
        justifyContent: "center",
        alignItems: "center",
         shadowColor: "black",
        borderRadius:10,
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        elevation: 1,
        backgroundColor: "whitesmoke",
        flexDirection:"row"
    },
    mainAccountContainer: {
        height: "91%",
        width: "95%",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        borderRadius:10,
        shadowOpacity: 0.36,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation:1
        
    },
    welcomeText: {
        fontSize: 20,
        fontWeight:"bold"
    },
    regLoginPage: {
        shadowColor: "black",
        shadowOpacity: 0.36,
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 10,
        elevation: 1,
        height: 40,
        width: "98%",
        borderRadius:10,
        marginVertical:1,
        backgroundColor: "white",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        marginTop:4
 
        
        
    },
    switchContainer: {
        width: 50,
    },
    mainContentContainer: {

        width: "95%",
    }


})


export default Account
