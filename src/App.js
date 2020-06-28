/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import Layout from './Layout';

const App = () => {
  const store = configureStore();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <Layout />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
