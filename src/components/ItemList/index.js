import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Stars from './Stars';

const ItemList = ({ item }) => {
    return (
        <View style={styles.itemWrapper}>
            <Image
                style={{ width: 350, height: 350 }}
                source={{ uri: item.image.original }}
                resizeMode='contain'
            />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>{`rating: ${item.rating.average}`}</Text>
            <Stars amount={item.rating.average} />
        </View>
    );
}

export default ItemList;

ItemList.propTypes = {
    item: PropTypes.shape({
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
    itemWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 10,
    },
    name: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    rating: {
        color: 'white',
        fontSize: 18,
    }
});