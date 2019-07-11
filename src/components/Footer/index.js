import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { BACKGROUND_COLOR as bgColor } from '../../constants';

const SIZE = 16;
const COLOR = 'white';

const Footer = (props) => (
    <View style={styles.footerContainer}>
        <Icon name='copyright' size={SIZE} color={COLOR} />
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
        alignItems: 'center',
        backgroundColor: bgColor
    },
    name: {
        color: COLOR,
        fontSize: SIZE
    }
});