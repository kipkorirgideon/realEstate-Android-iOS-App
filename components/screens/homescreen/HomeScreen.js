import React, { useContext}from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import Drawer from './Drawer'
import { mainContext} from "../../Contexts/contexts"
function HomeScreen() {
    // const { drawer } = useContext(mainContext)
    // <Text style={styles.hamItems} onPress= {() => drawer.current.openDrawer()}>ham</Text>

    return (
        <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
                <View style={styles.hambergerContainer} >
                    
                    

                </View>
                <View style={styles.mainTitleContainer}>
                    <Text style={{ fontSize: 24 }}>Search for the best home</Text>
                </View>
            </View>
            <View style={styles.searchContainer}>
                <TextInput placeholder="Enter your search here" style={styles.inputSearch} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'column',

        width: "100%",
        height: 130,
        alignItems: "center",
        backgroundColor: "#4fb2e8",
        justifyContent: "center"

    },
    titleContainer: {
        flexDirection: "row",
        width: "99%",

    },
    hambergerContainer: {
        width: "10%",
        margin: 5,
        backgroundColor: "grey",
        justifyContent: "center",
        alignItems: "center"

    },
    mainTitleContainer: {
        width: "85%",
        margin: 5
    },
    searchContainer: {
        margin: 5,
        height: 40,
        width: "98%"

    },

    inputSearch: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "magenta",
        fontSize: 18,
        padding: 10,


    },
    hamItems: {

    }
})

export default HomeScreen
