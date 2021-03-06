import {createReduxContainer} from 'react-navigation-redux-helpers';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/Home.page';
import {connect} from 'react-redux';
import AboutRoutesTabNavigator from './about.routes.js';
import {translateHeaderText} from '../utils/language.utils';


export const AppNavigator = createStackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: translateHeaderText('NAV_HEADER_TEXT_HOME')
  },
  about: AboutRoutesTabNavigator,
});

const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});
export default connect(mapStateToProps)(App);
