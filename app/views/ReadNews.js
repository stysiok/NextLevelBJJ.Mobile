import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { 
    Container,
    Content,
    Card, 
    CardItem, 
    Left,
    H1,
    Text } from 'native-base';
import moment from 'moment';

export default class News extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount(){
        try {
            let query = `query { post( postGuid: "${this.props.navigation.getParam('postId')}" ) { postId title text creationDate author image }}`;
            let response = await fetch('http://192.168.1.109:5000/graphql/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     query: query
                })
            });
            
            let responseJson = await response.json();
            this.setState({
                isLoading: false,
                post: responseJson.data.post
            });
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }else{
            return(
                
                <Container>
                    <Content>
                        <Card>
                            <CardItem cardBody>
                                <Image source={{uri: this.state.post.image }} style={{height: 200, width: null, flex: 1}} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <H1>
                                        {this.state.post.title}
                                    </H1>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Text>
                                        {this.state.post.text}
                                    </Text>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Text note>
                                    Napisane przez {this.state.post.author} dnia {moment(this.state.post.date).format('DD.MM.YYYY')}
                                </Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            );
        }
    }
}