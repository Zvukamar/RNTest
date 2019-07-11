import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import Stars from './Stars';

const ItemList = ({ item, showDetails }) => {
    const displayDetails = () => {
        showDetails(item);
    }
    return (
        <View style={styles.itemWrapper}>
            <TouchableOpacity onPress={displayDetails}>
                <Image
                    style={styles.image}
                    source={{ uri: item.image.original }}
                    resizeMode='contain'
                />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>{`average rating: ${item.rating.average}`}</Text>
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
    }),
    showDetails: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    itemWrapper: {
        flex: 1,
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 30
    },
    image: {
        width: 350,
        height: 350,
        marginBottom: 10
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
        marginBottom: 5
    }
});