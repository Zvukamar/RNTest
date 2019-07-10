import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ItemList = ({ item }) => {
    return (
        <View>
            <Text>{item.name}</Text>
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