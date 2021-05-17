import React from 'react'
import { Text, View, StyleSheet } from "react-native"
function Cart() {
    return (
        <View style={styles.cartContainer}>
            <Text>Cart page</Text>
        </View>


    )
}
const styles = StyleSheet.create({
    cartContainer: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    }

})


export default Cart