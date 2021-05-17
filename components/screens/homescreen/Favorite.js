import React from 'react'
import {Text, View,StyleSheet} from "react-native"
function Favorite() {
    return (
        <View style={styles.favoriteContainer}>
        <Text>Favorite page</Text>
        </View>

        
    )
}
const styles = StyleSheet.create({
    favoriteContainer: {
        flex: 1,
       alignItems: "center",
        justifyContent: "center",
        width: "100%"
    }

})


export default Favorite