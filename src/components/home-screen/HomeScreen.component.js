import React, {useState} from 'react';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  RadioGroup,
  Radio,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import TopNavigation from '../top-navigation/TopNavigation.component';
import NotesLayout from '../notes-layout/NotesLayout.component';
import ActionSheet from '../action-navigation/ActionNavigation.component';
import material_dark from '../../themes/material_dark';
import material_light from '../../themes/material_light';

console.log('eva1', eva);
const themeArray = [material_dark, material_light, eva.dark, eva.light];

export default () => {
  let actionSheetRef = null;
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={themeArray[selectedIndex]}>
        <TopNavigation hamburgerClicked={() => actionSheetRef.open()} />
        <RadioGroup
          selectedIndex={selectedIndex}
          onChange={index => setSelectedIndex(index)}>
          <Radio>Material dark</Radio>
          <Radio>Material light</Radio>
          <Radio>Eva dark</Radio>
          <Radio>Eva light</Radio>
        </RadioGroup>
        <NotesLayout />
        <ActionSheet
          ref={ref => {
            actionSheetRef = ref;
          }}
          height={230}
        />
      </ApplicationProvider>
    </>
  );
};
