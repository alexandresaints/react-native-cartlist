import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./src/Screens/Home";
import SecondHome from "./src/Screens/SecondHome";
import Navbar from './src/Components/Navbar'

const Main = createNativeStackNavigator()

export default function App(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Home' component={Home} options={{ headerTitle: (props) => <Navbar {...props} />, headerTitleAlign: 'center' }}/>
                <Main.Screen name='SecondHome' component={SecondHome} options={{ headerTitle: (props) => <Navbar {...props} />, headerTitleAlign: 'center', headerBackVisible: false}}/>
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}