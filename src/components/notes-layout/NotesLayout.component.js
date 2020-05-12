import React from 'react';
import {Icon} from '@ui-kitten/components';
import {StyleSheet, TouchableOpacity} from 'react-native';

const NotesLayout = () => {
  return (
    <TouchableOpacity style={styles.floatingButton}>
      <Icon name="plus-circle" size="small" fill="teal" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    width: 70,
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 70,
    borderRadius: 0,
  },
});

export default NotesLayout;
