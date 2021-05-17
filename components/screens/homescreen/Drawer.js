import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const Drawer = () => {
  const drawer = useRef(null);
  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
     
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}
    >
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
        padding: 16,
    backgroundColor: "green"
  },
  navigationContainer: {
      backgroundColor: "red",
      width: 10
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export default Drawer;
