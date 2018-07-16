import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default class Main extends React.Component {
    render(){
        return (
            <View>
                <Text>{this.props.navigation.state.params.carnetGuid}</Text>
            </View>
        );
    }
}