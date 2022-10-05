import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Header from "../Header";

import { styles } from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <View style={styles.inputcontainer}>
                <TextInput
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor={'#808080'}
                    style={styles.inputtext}
                />
                <TouchableOpacity style={styles.buttonstyle}>
                    <Image 
                        style={styles.logo}
                        source={
                            require('../../assets/iconbutton.png')
                        }
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.containerlist}>
                <View style={styles.containerconcluidas}>
                    <Text style={styles.textcriadas}>Criadas  0</Text>
                    <Text style={styles.textconcluidas}>Concluídas  0</Text>
                </View>
                <View style={styles.lineStyle}/>
                <View style={styles.containertarefas}>
                    <Text>Teste</Text>
                </View>
            </View>
        </View>
    );
}