import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
  RadioGroup,
  Radio,
} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import TopNavigation from '../top-navigation/TopNavigation.component';
import NotesLayout from '../notes-layout/NotesLayout.component';
import ActionSheet from '../action-navigation/ActionNavigation.component';
import NavigationContent from '../../features/navigation-content/NavigationContent.component';
import {selectNavigationContent} from '../../features/navigation-content/NavigationContent.actions';
import Settings from '../../features/settings/Settings.component';
import {
  heightPercentageToDP,
  isPortrait,
} from '../../utils/responsiveDimensions';
import material_dark from '../../themes/material_dark';
import material_light from '../../themes/material_light';

console.log('eva1', eva);
const themeArray = [material_dark, material_light, eva.dark, eva.light];

export default () => {
  let actionSheetRef = null;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [defaultActionSheetHeight, setDefaultActionSheetHeight] = useState(
    heightPercentageToDP(isPortrait() ? '30%' : '55%'),
  );
  const [selectedActionSheetHeight, setSelectedActionSheetHeight] = useState(
    heightPercentageToDP(isPortrait() ? '92.5%' : '80%'),
  );
  const {currentScreen} = useSelector(state => state.navigationContent);
  const dispatch = useDispatch();

  const onOrientationChange = () => {
    setDefaultActionSheetHeight(
      heightPercentageToDP(isPortrait() ? '30%' : '55%'),
    );
    setSelectedActionSheetHeight(
      heightPercentageToDP(isPortrait() ? '92.5%' : '80%'),
    );
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', onOrientationChange);
    };
  });

  const onActionSheetClose = () => dispatch(selectNavigationContent('default'));
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
          closeOnDragDown={currentScreen === 'settings' ? false : true}
          dragFromTopOnly={currentScreen === 'settings' ? true : false}
          onClose={onActionSheetClose}
          ref={ref => {
            actionSheetRef = ref;
          }}
          height={
            currentScreen === 'settings'
              ? selectedActionSheetHeight
              : defaultActionSheetHeight
          }>
          {currentScreen === 'settings' ? <Settings /> : <NavigationContent />}
        </ActionSheet>
      </ApplicationProvider>
    </>
  );
};
