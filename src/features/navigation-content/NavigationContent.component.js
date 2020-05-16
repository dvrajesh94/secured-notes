import React from 'react';
import {useDispatch} from 'react-redux';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Icon, useTheme} from '@ui-kitten/components';
import navigationOptions from './NavigationContent.json';
import {selectNavigationContent} from './NavigationContent.actions';
import packageJson from '../../../package.json';

const NavigationContent = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const selectedContent = type => {
    dispatch(selectNavigationContent(type));
  };
  return (
    <View style={styles.listContainer}>
      {navigationOptions.map(option => (
        <TouchableOpacity
          key={option.icon}
          style={styles.listButton}
          onPress={() => selectedContent(option.label.toLowerCase())}>
          <Icon
            name={option.icon}
            fill={theme['background-alternative-color-4']}
            style={styles.listIcon}
          />
          <Text
            category="s1"
            style={styles.listLabel}
            stroke={theme['background-alternative-color-4']}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
      <Text
        category="s1"
        style={styles.version}
        stroke={theme['background-alternative-color-4']}>
        v{packageJson.version}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    padding: 25,
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listIcon: {
    width: 27,
    height: 27,
  },
  listLabel: {
    paddingLeft: 15,
  },
  version: {
    textAlign: 'center',
  },
});

export default NavigationContent;
