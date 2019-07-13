import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { COLOR } from '../../constants';

const parseSummary = (text) => {
    return text && text.replace(/<\/?[^>]+(>|$)/g, "");
}

const Summary = (props) => {
    const { show } = props;
    return (
        <View style={styles.wrapper}>
            <Text style={styles.section}>{parseSummary(show.summary)}</Text>
            {show.genres && <Text style={styles.section}>{`Genres:\n${show.genres.join(", ")}`}</Text>}
            {show.schedule && show.schedule.days && show.schedule.days.length > 0 && (
                <Text style={styles.section}>
                    {`Schedule:\n${show.schedule.days.join(", ")} ${show.schedule.time && 'At ' + show.schedule.time}`}
                </Text>)}
            {show.network && <Text style={styles.section}>{`Network:\n${show.network.name}`}</Text>}
            <Text style={styles.section}>{`Language:\n${show.language}`}</Text>
        </View>
    );
}

export default Summary;

Summary.propTypes = {
    show: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        rating: PropTypes.shape({
            avarage: PropTypes.number
        }),
        image: PropTypes.shape({
            medium: PropTypes.string,
            original: PropTypes.string
        })
    })
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 10,
        marginBottom: 10
    },
    section: {
        color: COLOR,
        fontSize: 16,
        marginTop: 20
    }
});