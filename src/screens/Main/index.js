import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShowList from '../../components/ShowList';
import { BACKGROUND_COLOR as bgColor } from '../../constants';

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
        backgroundColor: bgColor,
        justifyContent: 'center'
    }
})