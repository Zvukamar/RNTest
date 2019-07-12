import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { AppRegistry } from 'react-native';
import Footer from './src/components/Footer';
import Routes from './src/routes';
import { name as appName } from './app.json';
import { BACKGROUND_COLOR as bgColor } from './src/constants';

const App = (props) => {
    return (
        <SafeAreaView style={styles.appContainer}>
            <StatusBar backgroundColor={bgColor} barStyle='light-content' />
            <Routes />
            <Footer name='Alex Havkin' />
        </SafeAreaView>
    );
}

AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
    appContainer: {
        flex: 1
    }
});