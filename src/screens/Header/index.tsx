import React from "react";
import { View, Image } from 'react-native';
import { styles } from './styles';

export default function Header() {
    return(
        <View style={styles.container}>
            <Image 
                style={styles.logo}
                source={
                    require('../../assets/Logoapp.png')
                }
            />
        </View>
    );
}