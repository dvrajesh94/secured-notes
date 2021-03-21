import React, {useState, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import TopNavigation from '../top-navigation/TopNavigation.component';
import NotesLayout from '../notes-layout/NotesLayout.component';
import ActionSheet from '../action-navigation/ActionNavigation.component';
import NavigationContent from '../../features/navigation-content/NavigationContent.component';
import {selectNavigationContent} from '../../features/navigation-content/NavigationContent.actions';
import {
  heightPercentageToDP,
  isPortrait,
} from '../../utils/responsiveDimensions';

export default ({navigation, ...rest}) => {
  let actionSheetRef = null;
  const dispatch = useDispatch();
  const [defaultActionSheetHeight, setDefaultActionSheetHeight] = useState(
    heightPercentageToDP(isPortrait() ? '30%' : '55%'),
  );

  const onContentSelection = option => {
    dispatch(selectNavigationContent(option));
    navigation.navigate(option);
    actionSheetRef.close();
  };

  const onOrientationChange = () => {
    setDefaultActionSheetHeight(
      heightPercentageToDP(isPortrait() ? '30%' : '55%'),
    );
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onOrientationChange);
    return () => {
      Dimensions.removeEventListener('change', onOrientationChange);
    };
  });

  return (
    <>
      <TopNavigation hamburgerClicked={() => actionSheetRef.open()} />
      <NotesLayout />
      <ActionSheet
        ref={ref => {
          actionSheetRef = ref;
        }}
        height={defaultActionSheetHeight}>
        {<NavigationContent optionSelected={onContentSelection} />}
      </ActionSheet>
    </>
  );
};
