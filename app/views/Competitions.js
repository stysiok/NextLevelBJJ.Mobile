import React from 'react';
import { Container, Content, Text } from 'native-base';

export default class Competitions extends React.Component{
    static navigationOptions = {
        drawerLabel: 'Zawody'
    }
    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        Competitions screen
                    </Text>
                </Content>
            </Container>
        );
    }
}