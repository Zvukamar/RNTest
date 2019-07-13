import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SIZE, COLOR } from '../../constants';

const ALLSTARS = 10;

const generateIcon = (key, name) => {
    return <Icon style={styles.icon} key={key} size={SIZE} name={name} color={COLOR} />
}

const Stars = (props) => {
    const { rating } = props;
    const fullstar = Number.parseInt(rating);
    const halfstar = rating % 1 !== 0;
    let starsBody = [];
    for (let i = 0; i < ALLSTARS; i++) {
        if (fullstar > i) {
            starsBody.push(generateIcon(i, 'star'));
        } else if (fullstar === i && halfstar) {
            starsBody.push(generateIcon(i, 'star-half-empty'))
        } else {
            starsBody.push(generateIcon(i, 'star-o'));

        }
    }
    return (
        <View>
            <Text style={styles.rating}>{`average rating: ${rating}`}</Text>
            <View style={styles.wrapper}>
                {starsBody}
            </View>
        </View>
    )
}

Stars.propTypes = {
    rating: PropTypes.number
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

