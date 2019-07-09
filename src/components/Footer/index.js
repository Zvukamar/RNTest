import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SIZE = 16;

const Footer = (props) => (
    <View style={styles.footerContainer}>
        <Icon name='copyright' size={SIZE} />
        <Text style={styles.name}>{props.name}</Text>
    </View>
);

Footer.propTypes = {
    name: PropTypes.string.isRequired
}

export default Footer;

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: SIZE
    }
});