import React from 'react';
import { View, ActivityIndicator, Image } from 'react-native';
import { 
    Container,
    Content,
    Card, 
    CardItem, 
    Left,
    H1 } from 'native-base';

export default class News extends React.Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    async componentDidMount(){
        try {
            let query = `query { post( postGuid: "${this.props.navigation.getParam('postId')}" ) { postId title text creationDate }}`;
            console.log(query);
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
            console.log(responseJson);
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
                                <Image source={{uri: 'http://placekitten.com/200/300'}} style={{height: 200, width: null, flex: 1}} />
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <H1>
                                        asdasdasd
                                    </H1>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    asdasdas
                                </Left>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            );
        }
    }
}