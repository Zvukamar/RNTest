import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import ItemList from '../ItemList';

const OFFSET = 5;

class ShowList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ready: false,
            page: OFFSET + 1
        }
    }

    getData = async (startIndex) => {
        let data = [];
        let { page } = this.state;
        for (let i = startIndex; i < page; i++) {
            try {
                const response = await axios.get(`http://api.tvmaze.com/shows/${i}`);
                data.push(response.data);
            } catch (e) {
                console.log(e);
            }

        }
        return data;
    }

    async componentDidMount() {
        let data = await this.getData(1);
        this.setState(prevState => {
            return {
                data: data,
                ready: true,
                page: prevState.page + OFFSET
            }
        });
    }

    renderItemList = ({ item }) => {
        return <ItemList item={item} showDetails={this.showDetails} />
    }

    showDetails = (show) => {
        const { navigation } = this.props;
        navigation.navigate('ShowDetails', { show });
    }

    keyExtractor = (item) => item.id.toString()

    onEndReached = async () => {
        let data = this.state.data;
        let dataResponse = await this.getData(this.state.page - OFFSET);
        data.push(...dataResponse)
        this.setState(prevState => {
            return {
                data: data,
                page: prevState.page + OFFSET
            }
        });
    }

    render() {
        const { ready, data } = this.state;
        if (!ready || !data) {
            return (
                <View style={styles.loadingWrapper}>
                    <ActivityIndicator size='large' />
                </View>
            )
        }
        return (
            <FlatList
                data={data}
                renderItem={this.renderItemList}
                keyExtractor={this.keyExtractor}
                onEndReached={this.onEndReached}
                ListFooterComponent={<ActivityIndicator />}
            />
        );
    }
}

export default ShowList;

const styles = StyleSheet.create({
    loadingWrapper: {
        flex: 1,
        justifyContent: 'center'
    }
});