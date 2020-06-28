import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Layout, Select, SelectItem} from '@ui-kitten/components';
import {useDispatch, useSelector} from 'react-redux';
import {selectedTheme} from '../settings/Settings.action';
import {themeMap} from '../../constants/ThemeConstants';

const Settings = () => {
  const theme = useSelector(state =>
    state && state.settings ? state.settings.currentTheme : {},
  );
  const dispatch = useDispatch();
  const setTheme = index => {
    dispatch(selectedTheme({index: index, value: themeMap[index.row]}));
  };
  return (
    <Layout level="4">
      <View style={styles.view}>
        <Select
          style={styles.select}
          selectedIndex={theme.index}
          onSelect={index => setTheme(index)}
          value={theme.value.title}
          label="Theme">
          {themeMap.map((themeObj, idx) => (
            <SelectItem title={themeObj.title} key={idx} />
          ))}
        </Select>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  select: {
    flex: 1,
    margin: 10,
  },
  view: {
    height: '100%',
  },
});

export default Settings;
