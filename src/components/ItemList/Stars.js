import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const ALLSTARS = 10;
const ICON_COLOR = 'white';
const ICON_SIZE = 15;

const Stars = (props) => {
    const { amount } = props;
    const fullstar = Number.parseInt(amount);
    const halfstar = amount % 10 !== 0;
    let fullstarBody = [];
    let empotystarBody = [];
    for (let i = 0; i < ALLSTARS; i++) {
        if (fullstar > i) {
            fullstarBody.push(<Icon key={i} size={ICON_SIZE} name='star' color={ICON_COLOR} />)
        } else {
            empotystarBody.push(<Icon key={i} size={ICON_SIZE} name='star-o' color={ICON_COLOR} />)
        }
    }
    return (
        <View style={styles.wrapper}>
            {fullstarBody}
            {halfstar && <Icon size={ICON_SIZE} name='star-half-empty' color={ICON_COLOR} />}
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
    }
});

