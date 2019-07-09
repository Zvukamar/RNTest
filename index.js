import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppRegistry } from 'react-native';
import Footer from './src/components/Footer';
import Routes from './src/routes';
import { name as appName } from './app.json';

const App = (props) => {
    return (
        <View style={styles.appContainer}>
            <Routes />
            <Footer name='Alex Havkin' />
        </View>
    );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    }
});