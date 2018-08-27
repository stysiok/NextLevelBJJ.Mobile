import React from 'react';
import { Container, Content, Text } from 'native-base';

export default class Competitions extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        Competitions screen
                    </Text>
                    <Button onPress={() => this.props.navigation.navigate('Competition')}>
                        <Text>Click</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}