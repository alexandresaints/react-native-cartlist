import React from "react";
import {View, Text, StyleSheet } from "react-native";

export default function Navbar(){
        return(
            
            <View style={styles.headerContainer}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.headerTitle}>Meu carrinho</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },

    headerTitle: {
        color: '#000',
        fontFamily: 'Poppins-ExtraBold',
        fontSize: 24
    }

})
    
