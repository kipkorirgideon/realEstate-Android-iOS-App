
import 'react-native-gesture-handler';
import React, { useRef, useState } from "react";
import {  StyleSheet, Button, View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Houses from './components/screens/homescreen/Houses'
import Account from "./components/screens/accounts/Account";
import Favorite from "./components/screens/homescreen/Favorite";
import Cart from "./components/screens/homescreen/Cart";
import Register from "./components/screens/accounts/Register"
import { createStackNavigator } from '@react-navigation/stack';
import { mainContext } from "./components/Contexts/contexts"
const Stack = createStackNavigator();


function App() { 
  const Drawer = createDrawerNavigator();
  const drawer = useRef(null);
  return (
    <mainContext.Provider value={{ drawer }}>     
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home}/>
          <Drawer.Screen name="Account" component={Account}/>
          <Drawer.Screen name="Your bookings" component={Cart} />
          <Drawer.Screen name="Favorites" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>   
    </mainContext.Provider>
  )
}

const Home = () => {
    const Tab = createBottomTabNavigator();
    return (
       <Tab.Navigator
      tabBarOptions={{
        labelStyle: {
          textTransform: "none", textAlign: "center",
          backgroundColor: "transparent",
          color: "rgb(0, 122, 255)",
          fontSize: 18,
          paddingBottom: 14
        },
        style: {
          backgroundColor: "whitesmoke",
        },
      }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorite" component={Favorite} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    )
  }
const styles = StyleSheet.create({
  allContainer: {
    borderWidth: 2,
    borderColor: 'magenta',
    flex: 1,
    alignItems: "center"

  },
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "grey",
    width: 255,
    borderWidth: 1
  },


})


export default App
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }



// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

