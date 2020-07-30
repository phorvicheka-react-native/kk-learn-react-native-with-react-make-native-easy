import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import {aboutRoutesConfig} from '../config/routes.config';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default createBottomTabNavigator(
  {
    aboutApp: {
      screen: AboutApp,
      navigationOptions: {
        title: 'About the App'
      }
    },
    aboutDevs: {
      screen: AboutDevs,
      navigationOptions: {
        title: 'About the Creators'
      }
    },
  },
  {
    navigationOptions: {
      title: 'ABOUT',
    },
    ...aboutRoutesConfig
  }
);
