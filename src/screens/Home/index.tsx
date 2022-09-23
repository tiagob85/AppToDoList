import React from "react";
import { View, Text } from 'react-native';
import Header from "../Header";

import { styles } from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <Text style={styles.textstyle}>Home !</Text>
        </View>
    );
}