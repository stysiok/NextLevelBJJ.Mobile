import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Welcome extends React.Component{
    render(){
        return (
            <View style={styles.view}>
            <Image style={styles.backgroundImage} source={require('../img/welcomeBg.jpg')}/>
            <View style={styles.overlay} />
            <Image style={styles.logo} source={require('../img/nextLevelLogo.png')}/>
            <Text style={styles.header}>
                {'Oss Jujiterio!'.toUpperCase()}
            </Text>
            <Text style={styles.text}>
                Witaj w mobilnej aplikacji klubu Next Level Opole. W tym miejscu sprawdzisz swój karnet, zapiszesz się na zawody i dowiesz się co słychać w klubie.
            </Text>
            <Button title="Wczytaj karnet" style={styles.button}/>
         </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    logo: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        marginVertical: 10
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    header: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 40,
        marginVertical: 20
    },
    text: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        marginRight: 25,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 75
    },
    button: {
        
    }    
});