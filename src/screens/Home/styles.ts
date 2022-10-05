import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#333333'
    },
    textstyle:{
        color: '#FFF',        
    },
    inputtext:{
        width: 271,
        height: 54,
        backgroundColor: '#454545',
        borderWidth: 1,
        justifyContent: 'center',
        padding: 10,
        fontSize: 16,
        color: '#FFF'
    },
    buttonstyle:{
        height: 52,
        width: 52,
        marginLeft: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputcontainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,
    },
    logo:{
        width: 8,
        height: 8,
    },
    containerlist:{
       /* backgroundColor: '#454545',*/
        marginTop: 20,
        marginLeft: 16,
        marginRight: 16,
    },
    containerconcluidas:{
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textcriadas:{
        color: '#4EA8DE',
        fontWeight: 'bold',
        fontSize: 14,
    },
    textconcluidas:{
        color: '#8284FA',
        fontWeight: 'bold',
        fontSize: 14,
    },
    lineStyle:{
        marginTop: 20,
        borderWidth: 1.5,
        borderColor:'#454545',
        margin:10,
    },
    containertarefas:{
        marginLeft: 18,
        marginRight: 18,
        backgroundColor: '#454545',
        height: 208,        
    }
});