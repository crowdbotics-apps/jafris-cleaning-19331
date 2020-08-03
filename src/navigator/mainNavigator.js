import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings86984Navigator from '../features/Settings86984/navigator';
import Settings86969Navigator from '../features/Settings86969/navigator';
import NotificationList86968Navigator from '../features/NotificationList86968/navigator';
import Maps86967Navigator from '../features/Maps86967/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings86984: { screen: Settings86984Navigator },
Settings86969: { screen: Settings86969Navigator },
NotificationList86968: { screen: NotificationList86968Navigator },
Maps86967: { screen: Maps86967Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
