/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import HomeStack from './routes/HomeStack';
import {getTheme} from './themes/GetTheme';

const Settings = props => {
  const themeObj = useSelector(state =>
    state && state.settings ? state.settings.currentTheme : {},
  );
  const theme = getTheme(themeObj.value);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <HomeStack />
        </SafeAreaView>
      </ApplicationProvider>
    </>
  );
};

export default Settings;
