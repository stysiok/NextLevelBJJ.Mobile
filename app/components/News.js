import React from 'react';
import { 
    Content,
    Card, 
    CardItem, 
    Left,
    Text, 
    Button,
    H1 } from 'native-base';
import { Image } from 'react-native';

export default class News extends React.Component {
    constructor(){
        super();
    }
    
    render() {
        return (
            <Content>
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'http://placekitten.com/200/300'}} style={{height: 200, width: null, flex: 1}} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <H1>
                                {this.props.post.title}
                            </H1>
                        </Left>
                    </CardItem>   
                    <CardItem>
                        <Left>
                            <Button transparent primary>
                                <Text>
                                    Czytaj...
                                </Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        );
    }
}