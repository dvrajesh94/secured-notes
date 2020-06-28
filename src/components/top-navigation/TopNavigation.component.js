/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  Icon,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {func} from 'prop-types';

const noop = () => {};

const HamBurgerIcon = props => <Icon {...props} name="menu" />;

const ClockIcon = props => (
  <Icon {...props} stroke="grey" name="clock-outline" />
);

const SearchIcon = props => (
  <Icon {...props} stroke="grey" name="search-outline" />
);

const TopNavigationComponent = props => {
  const {hamburgerClicked} = props;

  const toggleMenu = () => {
    hamburgerClicked();
  };

  const renderRightActions = () => (
    <>
      <TopNavigationAction
        icon={SearchIcon}
        onPress={() => console.log('search')}
      />
      <TopNavigationAction
        icon={ClockIcon}
        onPress={() => console.log('sort')}
      />
    </>
  );

  const renderLeftActions = () => (
    <>
      <TopNavigationAction icon={HamBurgerIcon} onPress={toggleMenu} />
      <Text
        status="basic"
        category="h6"
        appearance="alternative"
        style={{fontWeight: 'bold'}}
        {...props}>
        N o t e s
      </Text>
    </>
  );

  return (
    <Layout level="1">
      <TopNavigation
        alignment="center"
        accessoryLeft={renderLeftActions}
        accessoryRight={renderRightActions}
      />
    </Layout>
  );
};

TopNavigationComponent.propTypes = {
  hamburgerClicked: func,
};

TopNavigationComponent.defaultProps = {
  hamburgerClicked: noop,
};

export default TopNavigationComponent;
