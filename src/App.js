/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import configureStote from './store/ConfigureStore';
import HomeStack from './routes/HomeStack';
import material_dark from './themes/material_dark';
import material_light from './themes/material_light';

const App = () => {
  const store = configureStote();
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <IconRegistry icons={EvaIconsPack} />
          <ApplicationProvider {...eva} theme={material_dark}>
            <SafeAreaView style={{flex: 1}}>
              <HomeStack />
            </SafeAreaView>
          </ApplicationProvider>
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
