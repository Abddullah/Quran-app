import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';

import ViewMode from '../DrawerScreens/ViewMode';
import SearchAyah from '../DrawerScreens/SearchAyah';
import SideMenu from '../DrawerScreens/SideMenu';
import TabScreen from '../Screens/TabScreens';

const DashBoard = createDrawerNavigator({
    Home: {
    screen: TabScreen,
    navigationOptions: {
        header: null,
    },
  },
  ViewMode: {
    screen: ViewMode,
    navigationOptions: {
        header: null,
    },
},
SearchAyah: {
    screen: SearchAyah,
    navigationOptions: {
        header: null,
    },
},
  
  }, {
    drawerWidth: 300,
    initialRouteName:'Home',
    contentComponent: SideMenu,
  });
  

export default (DashBoard);

