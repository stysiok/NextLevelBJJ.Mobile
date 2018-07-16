import React from 'react';
import { Button, Text, Container } from 'native-base';

export default class CodeScanner extends React.Component{
    render(){
        return (
            <Container>
                <Button onPress={() => this.props.navigation.goBack()}>
                    <Text>
                        Check
                    </Text>
                </Button>
            </Container>
        );
    }
}