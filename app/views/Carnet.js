import React from 'react';
import { Container, Content, Text } from 'native-base';

export default class Carnet extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Karnet'
    }

    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        Carnet screen
                    </Text>
                </Content>
            </Container>
        );
    }
}