import React, { Component } from 'react';
import { View, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import { styles } from '../../styles/styles';
import ItemList from '../../components/ItemList';
import { COLOR } from '../../constants';

class SearchBar extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (
                <TextInput
                    style={{ color: COLOR }}
                    placeholder='Search'
                    placeholderTextColor={COLOR}
                    autoFocus
                    onChangeText={navigation.getParam('text')}
                />
            )
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            loading: false
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({ 'text': this.setText })
    }

    setText = async (text) => {
        this.setState({ loading: true });
        let data = null;
        try {
            const response = await axios.get(`http://api.tvmaze.com/singlesearch/shows?q=${text}`);
            data = response.data
        } catch (e) { }
        this.setState({
            data: data,
            loading: false
        });
    }

    showDetails = (show) => {
        const { navigation } = this.props;
        navigation.navigate('ShowDetails', { show });
    }

    render() {
        return (
            <View style={styles.screenWrapper}>
                {this.state.loading && <ActivityIndicator size='large' style={style.loadingIndicator} />}
                {this.state.data && <ItemList item={this.state.data} showDetails={this.showDetails} />}
            </View>
        );
    }
}

export default SearchBar;

const style = StyleSheet.create({
    loadingIndicator: {
        flex: 1,
        justifyContent: 'center'
    }
});