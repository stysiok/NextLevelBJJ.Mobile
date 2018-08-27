import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import { Container, Button, Text, Content, Icon } from 'native-base';

export default class Main extends React.Component { 
    constructor(){
        super();
        this.state = {
            isLoading: false
        };
    }

    render(){
        if (this.state.isLoading) {
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        } else { 
            return (
                <Container>
                    <Content>
                        <Button large onPress={() => this.props.navigation.navigate('Carnet')}>
                            <Icon name='md-briefcase' />
                            <Text>
                                Mój karnet
                            </Text>
                        </Button>
                        <Button large onPress={() => this.props.navigation.navigate('PriceList')}>
                            <Icon name='md-pricetag' />
                            <Text>
                                Cennik
                            </Text>
                        </Button>
                        <Button large onPress={() => this.props.navigation.navigate('Schedule')}>
                            <Icon name='calendar' />
                            <Text>
                                Grafik
                            </Text>
                        </Button>              
                        <Button large onPress={() => this.props.navigation.navigate('Competitions')}>
                            <Icon name='md-medkit' />
                            <Text>
                                Zawody
                            </Text>
                        </Button>
                    </Content>
                </Container>
            );
        }
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