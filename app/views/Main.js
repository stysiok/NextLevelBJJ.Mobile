import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Container } from 'native-base';
import News from '../components/News';
import { GraphQLFetch } from '../modules/NextLevelFetch.js';

export default class Main extends React.Component { 
    constructor(){
        super();
        this.state = {
            isLoading: true
        };
    }

    async componentDidMount(){
        let query = 'query { posts { postId title image }}';
        let json = await GraphQLFetch(query);
        
        this.setState({
            isLoading: false,
            dataSource: json.data.posts
        });
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