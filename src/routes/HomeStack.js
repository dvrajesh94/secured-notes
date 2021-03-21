import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/home-screen/HomeScreen.component';
import Settings from '../features/settings/Settings.component';

const {Navigator, Screen} = createStackNavigator();

function HomeStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Home" component={Home} />
      <Screen name="Settings" component={Settings} />
    </Navigator>
  );
}

export default HomeStack;
