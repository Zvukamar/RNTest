import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainScreen from '../screens/Main';
import ShowDetails from '../screens/ShowDetails';
import SearchBar from '../screens/Search';

const Routes = createStackNavigator({
    Main: MainScreen,
    ShowDetails,
    SearchBar: SearchBar
}, {
        defaultNavigationOptions: {
            title: 'TV Shows',
            headerStyle: {
                backgroundColor: 'gray',
            },
            headerTintColor: '#fff',
        }
    }
);

export default createAppContainer(Routes);