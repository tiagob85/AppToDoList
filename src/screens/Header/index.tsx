import React from "react";
import { View, Image } from 'react-native';

import { styles } from './styles';

export default function Header() {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../../assets/logo.svg')}
            />
        </View>
    );
}