import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Text, ScrollView, Image, FlatList} from "react-native"
import APIService from '../../subComponets/APIService';
import HomeScreen from './HomeScreen';
let Image_url = { uri: '/home/kipkorir/Music/Android-iOS-app/realEstate/image/image_1.jpg' };
function Houses() {
    const [houses, setHouses] = useState([])
    useEffect(() => {
        APIService.getHouses()
            .then((resp) => setHouses(resp))
            .catch((error) => console.log(error))


    }, [])

    return (
        <View style={styles.houseContainer}>
            <HomeScreen/>
            <FlatList
                data={houses}
                keyExtractor={item => item.id}
                initialNumToRender={8}
                updateCellsBatchingPeriod = {50}
                maxToRenderPerBatch = {9}
                removeClippedSubviews = {true}
                renderItem={({item}) => {
                    return (
                <View style={styles.imageContainer}>
                    <View style={styles.detailedContainer}>
                        <View style={styles.imgContainer}>
                            <Image  source={{uri:item.img_1}} style={styles.imgStyleContainer} />
                        </View>
                        <View style={styles.locationContainer}>
    
                            <View style={styles.locContainer}>
                                <Text style={styles.textLocationStyle}>{item.county}</Text>
                            </View>
                            <View style={styles.locContainer}>
                                <Text style={styles.textLocationStyle}>{item.region}</Text>
                            </View>
                            <View style={styles.locContainer}>
                                <Text style={styles.textLocationStyle}>{item.estate}</Text>
                            </View>
                            <View style={styles.locContainer}>
                                <Text style={styles.textLocationStyle}>G map</Text>
                            </View>
    
    
                        </View>
                    </View>
    
                    <View style={styles.contactContainer}>
                        <View style={styles.conContainer}>
                            <Text style={styles.conTextStyle}>Call</Text>
    
                        </View>
                        <View style={styles.rentContainer}>
                            <Text style={styles.conTextStyle}>Rent Ksh: {item.rent}</Text>
    
                        </View>
                        <View style={styles.conContainer}>
                            <Text style={styles.conTextStyle}>Cart</Text>
    
                        </View>
    
                    </View>
    
                </View>
                    )
                }}
            
            
            />
        

     




        </View>
    )
}
const styles = StyleSheet.create({
    houseContainer: {
        width: "100%",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1
    },
    textLocationStyle: {
        color: 'blue',
        fontSize: 12

    },
    conTextStyle: {
        color: "green",
        fontSize: 13
    },
    imageContainer: {
        width: "98%",
        height: 320,
        alignItems: "center",
        marginVertical: 5,
        shadowColor: "black",
        shadowOpacity: 0.4,
        shadowRadius: 10,
        borderRadius: 7,
        shadowOffset: { width: 0, height: 9 },
        elevation: 10,
        backgroundColor: "whitesmoke",
        justifyContent: "center"


    },
    rentContainer: {
        height: "74%",
        width: 140,
        shadowRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center"


    },
    detailedContainer: {
        height: "88%",
        width: "98%",
        shadowRadius: 20,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        elevation: 2,
        borderRadius: 4,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",






    },
    contactContainer: {
        height: "10%",
        width: "98%",
        // shadowRadius: 5,
        // shadowColor: "black",
        // shadowOpacity: 0.5,
        // shadowOffset: { width: 0, height: 1 },
        // elevation: 2,
        // backgroundColor: "whitesmoke"
        borderRadius: 4,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white",
        alignItems: "center"


    },
    conContainer: {
        height: "74%",
        shadowRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 4 },
        elevation: 2,
        backgroundColor: "whitesmoke",
        width: 90,
        alignItems: "center",
        justifyContent: "center"
    },
    imgContainer: {
        marginTop: 2,
        height: "88%",
        width: "95%",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",

    },
    imgStyleContainer: {
        height: "98%",
        width: "98%",
        borderRadius: 5

    },
    locationContainer: {
        height: "10%",
        width: "95%",
        borderRadius: 7,
        flexDirection: "row",
        backgroundColor: "white",
        marginTop: 5,

        justifyContent: "space-around"

    },
    locContainer: {
        height: "74%",
        shadowRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
        backgroundColor: "whitesmoke",
        width: 72,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default Houses
