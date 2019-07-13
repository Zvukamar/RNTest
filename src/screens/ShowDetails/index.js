import React from 'react';
import { ScrollView, View, Image } from 'react-native';
import { styles } from '../../styles/styles';
import { WIDTH as width, HEIGHT as height } from '../../constants';
import Stars from '../../components/ItemList/Stars';
import Summary from '../../components/Summary';

const ShowDetails = (props) => {
    const show = props.navigation.getParam('show', null);
    return (
        <ScrollView style={styles.screenWrapper}>
            <Image
                style={{ width: width, height: height / 1.8 }}
                source={show.image ? { uri: show.image.medium || show.image.original } : require('../../assets/noimage.png')}
                resizeMode='stretch'
            />
            <View style={styles.container}>
                <Stars rating={show.rating.average} />
                <Summary show={show} />
            </View>
        </ScrollView>
    )
}

export default ShowDetails;

ShowDetails.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('show').name
});
