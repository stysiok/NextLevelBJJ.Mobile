import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Container } from 'native-base';

export default class CodeScanner extends React.Component{
    render(){
        return (
            <Container style={styles.cont}>
                <Button primary rounded large style={styles.btn} onPress={() => this.props.navigation.navigate('Drawer', {
                    carnetGuid: '988a9a93-e9cc-41d6-9c86-3c3177cea5f1'
                })}>
                    <Text>
                        Marcelo Garcia
                    </Text>
                </Button>
                <Button primary rounded large style={styles.btn} onPress={() => this.props.navigation.navigate('Drawer', {
                    carnetGuid: '34418698-f406-49d7-87d2-c237ad865519'
                })}>
                    <Text>
                        Adam Wardziński
                    </Text>
                </Button>
                <Button primary rounded large style={styles.btn} onPress={() => this.props.navigation.navigate('Drawer', {
                    carnetGuid: 'e371d29a-f14e-4c01-8b9e-b54fe6d73b8d'
                })}>
                    <Text>
                        Felipe Pena
                    </Text>
                </Button>
                <Button primary rounded large style={styles.btn} onPress={() => this.props.navigation.navigate('Drawer', {
                    carnetGuid: '2c65a289-28e7-4e3f-b074-5d8089f2a349'
                })}>
                    <Text>
                        Helio Gracie
                    </Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    },
    btn: {
        flex: 1,
        justifyContent: 'center'
    }
});