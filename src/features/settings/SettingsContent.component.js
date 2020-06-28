import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Text,
  Layout,
  IndexPath,
  Select,
  SelectItem,
  SelectGroup,
} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';

const Settings = () => {
  const themes = ['Material light', 'Material dark', 'Eva light', 'Eva dark'];
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
  const [selectedValue, setSelectedValue] = useState(themes[0]);
  const dispatch = useDispatch();
  // const selectedIndex = new IndexPath(0);
  const selectedTheme = index => {
    console.log('index', index);
    setSelectedValue(themes[index.row]);
    setSelectedIndex(index);
    dispatch()
  };
  return (
    <Layout level="4">
      <View style={{height: '100%'}}>
        {/* <Text>Content....</Text> */}
        <Select
          selectedIndex={selectedIndex}
          onSelect={index => selectedTheme(index)}
          value={selectedValue}
          label="Theme">
          {themes.map((theme, idx) => (
            <SelectItem title={theme} key={idx} />
          ))}
        </Select>
      </View>
    </Layout>
  );
};

export default Settings;
