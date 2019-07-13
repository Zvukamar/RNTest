import { StyleSheet } from 'react-native';
import { BACKGROUND_COLOR as bgColor } from '../constants';

export const styles = StyleSheet.create({
    screenWrapper: {
        flex: 1,
        backgroundColor: bgColor
    },
    container: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20
    },
    headerRight: {
        padding: 15
    }
})