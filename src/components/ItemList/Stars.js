import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

const ALLSTARS = 10;
const ICON_COLOR = 'white';
const ICON_SIZE = 15;

const generateIcon = (key, name) => {
    return <Icon style={styles.icon} key={key} size={ICON_SIZE} name={name} color={ICON_COLOR} />
}

const Stars = (props) => {
    const { rating } = props;
    const fullstar = Number.parseInt(rating);
    const halfstar = rating % 1 !== 0;
    let fullstarBody = [];
    let empotystarBody = [];
    for (let i = 0; i < ALLSTARS; i++) {
        if (fullstar > i) {
            fullstarBody.push(generateIcon(i, 'star'));
        } else {
            empotystarBody.push(generateIcon(i, 'star-o'));
        }
    }
    return (
        <View>
            <Text style={styles.rating}>{`average rating: ${rating}`}</Text>
            <View style={styles.wrapper}>
                {fullstarBody}
                {halfstar && generateIcon(0, 'star-half-empty')}
                {empotystarBody}
            </View>
        </View>
    )
}

Stars.propTypes = {
    rating: PropTypes.number.isRequired
}

export default Stars;

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row'
    },
    icon: {
        marginLeft: 3,
        marginRight: 3
    },
    rating: {
        color: 'white',
        fontSize: 18,
        marginBottom: 5,
        textTransform: 'capitalize'
    }
});

