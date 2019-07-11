import React from 'react';
import { View } from 'react-native';
import ShowList from '../../components/ShowList';
import { styles } from '../../styles/styles';

const MainScreen = (props) => {
    return (
        <View style={styles.screenWrapper}>
            <ShowList navigation={props.navigation} />
        </View>
    )
}

export default MainScreen;

