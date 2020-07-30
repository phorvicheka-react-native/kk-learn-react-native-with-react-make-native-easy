import {createReduxContainer} from 'react-navigation-redux-helpers';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomePage from '../pages/Home.page';
import AboutApp from '../components/About/AboutApp.component';
import AboutDevs from '../components/About/AboutDevs.component';
import theme from '../styles/theme.style.js';
import {connect} from 'react-redux';

const AboutRoutesTabNavigator = createBottomTabNavigator(
  {
    aboutApp: AboutApp,
    aboutDevs: AboutDevs,
  },
  {
    navigationOptions: {
      title: 'About',
    },
    tabBarOptions: {
      showIcon: false,
      style: {
        backgroundColor: 'white',
      },
      activeTintColor: theme.ACTIVE_TAB_COLOR,
      inactiveTintColor: theme.INACTIVE_TAB_COLOR,
      labelStyle: {
        fontSize: 14,
        padding: 12
      },
    },
  }
);

export const AppNavigator = createStackNavigator({
  home: HomePage,
  about: AboutRoutesTabNavigator,
});

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});
export default connect(mapStateToProps)(App);
