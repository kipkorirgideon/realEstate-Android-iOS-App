import React, { useState } from 'react'
// import CheckBox from '@react-native-community/checkbox';

import { Text, View, StyleSheet, TextInput, Button} from "react-native"

function Login() {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.cartContainer}>

            <View style={styles.loginContainer}>
                 <View style={styles.inputContainer}>
                <TextInput placeholder="Username" style={ styles.textInputStyle}/>
                
            </View>
            
             <View style={styles.inputContainer}>
                <TextInput placeholder = "Password" style={ styles.textInputStyle}/>
                </View>
                <View style={styles.specialContainer}>
                    
                    
                    <View style={styles.checkboxContainer}>
                        <Text>Show password</Text>
                    </View>
                    <View style={styles.forgotContainer}>
                       <Text>Forgot Password?</Text>
                    </View>
                    
                </View>

            <View style={styles.inputContainer}>
                <Button title = "Sign In"/>
            </View>

            </View>

        </View>


    )
}
const styles = StyleSheet.create({
    cartContainer: {
        alignItems: "center",
        height:"82%",
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: 5,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        borderRadius: 7,
        shadowOffset: { width: 0, height: 9 },
        elevation: 1,
        backgroundColor: "whitesmoke",

        
    },
    inputContainer: {
        width: "90%",
        height: 45,
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        borderRadius: 5,
       
        marginVertical: 3,
    },
    textInputStyle: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "white",
        margin: 2
    },
    loginContainer: {
  
        height: "70%",
        width: "99%",
        marginTop: 10,
        justifyContent: "center",
        alignItems: "center"
    
    },
    checkboxContainer: {
        width: "43%",
        height: "90%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"gray",
        height: "70%",
        borderRadius: 5,
        marginHorizontal:10
    
    },
    specialContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 45,
        width: "100%"
        
    },
    forgotContainer: {
        width: "43%",
        backgroundColor: "brown",
        height: "70%",
        borderRadius:5,
        alignItems: "center",
        justifyContent: "center",
        
        
   
    }
    

})


export default Login