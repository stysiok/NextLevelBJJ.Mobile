import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { Container, Button, Icon } from 'native-base';
import News from '../components/News';
import { GraphQLFetch } from '../modules/NextLevelFetch.js';
import { withNavigation } from 'react-navigation';
import { withLatestFrom } from '../../node_modules/rxjs/operator/withLatestFrom';

class Main extends React.Component { 
    constructor(){
        super();
        this.state = {
            isLoading: true
        };
    }

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                    <Icon name='menu' />
                </Button>
            ),
        };
    };

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

export default withNavigation(Main);