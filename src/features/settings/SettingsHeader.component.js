/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';

const NavigateBack = props => (
  <Icon {...props} stroke="grey" name="arrow-ios-back-outline" />
);

const Help = props => (
  <Icon {...props} stroke="grey" name="question-mark-circle-outline" />
);

const SettingsHeader = ({navigation, ...props}) => {
  const renderLeftActions = () => (
    <>
      <TopNavigationAction
        icon={NavigateBack}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text
        status="basic"
        category="h6"
        appearance="alternative"
        style={{fontWeight: 'bold'}}
        {...props}>
        S e t t i n g s
      </Text>
    </>
  );

  const renderRightActions = () => (
    <TopNavigationAction
      icon={Help}
      onPress={() => {
        console.log('Help!!!!');
      }}
    />
  );

  return (
    <>
      <Layout level="4">
        <TopNavigation
          alignment="center"
          accessoryLeft={renderLeftActions}
          accessoryRight={renderRightActions}
        />
      </Layout>
    </>
  );
};

export default SettingsHeader;
