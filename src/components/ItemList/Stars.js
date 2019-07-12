import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const ALLSTARS = 10;
const ICON_COLOR = 'white';
const ICON_SIZE = 15;

const generateIcon = (key, name) => {
    return <Icon style={styles.icon} key={key} size={ICON_SIZE} name={name} color={ICON_COLOR} />
}

const Stars = (props) => {
    const { amount } = props;
    const fullstar = Number.parseInt(amount);
    const halfstar = amount % 10 !== 0;
    let fullstarBody = [];
    let empotystarBody = [];
    for (let i = 0; i < ALLSTARS; i++) {
        if (fullstar > i) {
            fullstarBody.push(generateIcon(i, 'star'))
        } else {
            empotystarBody.push(generateIcon(i, 'star-o'))
        }
    }
    return (
        <View style={styles.wrapper}>
            {fullstarBody}
            {halfstar && generateIcon(0, 'star-half-empty')}
            {empotystarBody}
        </View>
    )
}

Stars.propTypes = {
    amount: PropTypes.number.isRequired
}

export default Stars;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 3,
        marginRight: 3
    }
});

