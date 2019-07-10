import React, { Component } from 'react';
import { Image, Text, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import ItemList from '../ItemList';

class ShowList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            ready: false,
            page: 1
        }
    }

    async componentDidMount() {
        const { page } = this.state;
        const response = await axios.get(`http://api.tvmaze.com/shows/${page}`);
        this.setState({
            data: [response.data],
            ready: true
        });
    }

    renderItemList = ({ item }) => {
        console.log(item)
        return <ItemList item={item} />
    }

    keyExtractor = (item) => item.id.toString()

    render() {
        const { ready, data } = this.state;
        if (!ready || !data) {
            return <ActivityIndicator size='large' />
        }
        return (
            <FlatList
                data={data}
                renderItem={this.renderItemList}
                keyExtractor={this.keyExtractor}
            />
        );
    }
}

export default ShowList;