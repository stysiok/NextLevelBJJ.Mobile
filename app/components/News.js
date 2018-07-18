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
import { withNavigation } from 'react-navigation';

class News extends React.Component {
    render(){
        return (
            <Content>
                <Card>
                    <CardItem cardBody>
                        <Image source={{uri: 'http://placekitten.com/200/300'}} style={{height: 200, width: null, flex: 1}} />
                    </CardItem>
                    <CardItem>
                        <Left>
                            <H1>
                                {this.props.post.title} + {this.props.post.postId}
                            </H1>
                        </Left>
                    </CardItem>   
                    <CardItem>
                        <Left>
                            <Button transparent primary onPress={() => this.props.navigation.navigate('ReadNews', {
                                postId: this.props.post.postId
                            })}>
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

export default withNavigation(News);