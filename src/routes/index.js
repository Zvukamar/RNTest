import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/Main';
import ShowDetails from '../screens/ShowDetails';

const Routes = createStackNavigator({
    Main: MainScreen,
    ShowDetails
}, {
    defaultNavigationOptions: {
        title: 'TV Shows',
    }}
);

export default createAppContainer(Routes);