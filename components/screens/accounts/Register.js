import React from 'react'
import { Text, View, StyleSheet, TextInput, Button , ScrollView} from "react-native"
function Register() {
    return (
        <ScrollView>
            <View style={styles.cartContainer}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Username" style={ styles.textInputStyle}/>
                
            </View>
            
            <View style={styles.inputContainer}>
                <TextInput placeholder = "Email / Phone number" style={ styles.textInputStyle}/>
            </View>
             <View style={styles.inputContainer}>
                <TextInput placeholder = "Create password" style={ styles.textInputStyle}/>
            </View>
             <View style={styles.inputContainer}>
                <TextInput placeholder = "Confirm password" style={ styles.textInputStyle}/>
            </View>

            <View style={styles.inputContainer}>
                <Button title = "Sign Up" color = "#369656"/>
            </View>
            <View style={styles.termsContainer}>
                <Text style = {styles.textStyles}>By creating account, you agree to Shiftsoft</Text>
                    <View style={{flexDirection : "row"}}>
                        <Text style={{ fontSize: 16, color: "blue" }}>conditions of use</Text>
                        <Text style= {{paddingLeft: 5, fontSize:16}}>and </Text>
                        
                        <Text style={{ fontSize: 16, color: "blue" }}>privacy notice</Text>
                    </View>
                        
            </View>



        </View>
        </ScrollView>


    )
}
const styles = StyleSheet.create({
    cartContainer: {
        alignItems: "center",
        height: 372,
        justifyContent: "center",
        alignItems: "center",
         shadowOpacity: 0.4,
        shadowRadius: 10,
        borderRadius: 7,
        shadowOffset: { width: 0, height: 2 },
        elevation: 10,
        backgroundColor: "whitesmoke",
        
    }, inputContainer: {
        width: "90%",
        height: 45,
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        borderRadius:5,
       
        marginVertical: 3,
        

    },
    textInputStyle: {
        fontSize: 18,
        padding: 10,
        backgroundColor: "white",
        margin:2
    

    },
    termsContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop:15
        
    },
    privacyConditions: {
        color:"blue"
    },
    textStyles: {
        fontSize: 16,
    }

})


export default Register