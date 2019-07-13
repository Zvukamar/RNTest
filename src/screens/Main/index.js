import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import ShowList from '../../components/ShowList';
import { styles } from '../../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const COLOR = 'white';
const SIZE = 16;

const MainScreen = (props) => {
    return (
        <View style={styles.screenWrapper}>
            <ShowList navigation={props.navigation} />
        </View>
    )
}

MainScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('SearchBar')}>
                <Icon name='search' color={COLOR} size={SIZE} />
            </TouchableOpacity>
        )
    }
}

export default MainScreen;

