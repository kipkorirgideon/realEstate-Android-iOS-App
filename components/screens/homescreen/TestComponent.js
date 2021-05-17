import React, {useEffect, useState} from 'react';
import { SafeAreaView, View, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import APIService from '../../subComponets/APIService';
function    TestComponent() {
const[houses, setHouses] = useState([])
  useEffect(() => {
    APIService.getHouses()
    .then((response)=>setHouses(response))

  },[])


  const getItemCount = (data) => 50;
  const Item = ({ title }) => (
    <View style={styles.item}>
       <Text style={styles.title}>{title}</Text>
    </View>
  );
  const myData = [
    {
    id: 1,
    name: "Gideon",
    age:25
    },
     {
    id: 2,
    name: "Kip",
    age:20
    },
     {
    id: 3,
    name: "Gideon",
    age:25
    },
     {
    id: 4,
    name: "Kip",
    age:20
    }
  ]
  const DATA = houses
  const getItem = (data, index) => myData
  
    return (
    <SafeAreaView style={styles.container, styles.favoriteContainer}>
      <VirtualizedList
        data={DATA}
        initialNumToRender={10}
        renderItem={({ item }) => <Item title={item.name} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    favoriteContainer: {
        flex: 1,
        borderWidth: 2,
        width: "100%"
    },
    item: {
      backgroundColor: '#f9c2ff',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
  });


export default TestComponent