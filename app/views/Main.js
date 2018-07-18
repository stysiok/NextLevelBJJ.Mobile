import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Container } from 'native-base';
import News from '../components/News';

export default class Main extends React.Component { 
    constructor(){
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount(){
        try {
            let response = await fetch('http://192.168.1.109:5000/graphql/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                     query: 'query { posts { postId title }}'
                })
            });
            
            let responseJson = await response.json();
            
            this.setState({
                isLoading: false,
                dataSource: responseJson.data.posts
            });
        } catch (error) {
            console.log(error);
        }
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
                    <FlatList 
                        data={this.state.dataSource}
                        renderItem={({item}) => {
                            return (
                                <News post={item} />
                            );
                        }}
                        keyExtractor={(item, index) => item.postId}
                    />                
                </Container>
            );
        }
    }
}