/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import configureStote from './store/ConfigureStore';
import HomeScreen from './components/home-screen/HomeScreen.component';

const App = () => {
  const store = configureStote();
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <HomeScreen />
      </Provider>
    </>
  );
};

export default App;
