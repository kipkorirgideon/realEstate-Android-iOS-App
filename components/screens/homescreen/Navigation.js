import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Houses from './Houses';
import Account from './Account';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Houses" component={Houses} />
                <Tab.Screen name="Account" component={Account} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default Navigation