import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import {aboutRoutesConfig} from '../config/routes.config';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {translateHeaderText} from '../utils/language.utils';

export default createBottomTabNavigator(
  {
    aboutApp: {
      screen: AboutApp,
      navigationOptions: translateHeaderText('ABOUT_theApp')
    },
    aboutDevs: {
      screen: AboutDevs,
      navigationOptions: translateHeaderText('ABOUT_theCreators')
    },
  },
  {
    navigationOptions: translateHeaderText('ABOUT_us'),
    ...aboutRoutesConfig
  }
);
