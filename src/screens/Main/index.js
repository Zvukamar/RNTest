import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShowList from '../../components/ShowList';

const MainScreen = (props) => {
    return (
        <View style={styles.mainContainer}>
            <ShowList />
        </View>
    )
}

export default MainScreen;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center'
    }
})