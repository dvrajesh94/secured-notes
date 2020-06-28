import React from 'react';
import {View} from 'react-native';
import {Icon, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, TouchableOpacity} from 'react-native';

const NotesLayout = () => {
  return (
    <>
      <Layout level="4">
        <View style={{height: '100%'}}>
          <Text> Hello </Text>
        </View>
      </Layout>
      <TouchableOpacity style={styles.floatingButton}>
        <Icon name="plus-circle" size="small" fill="teal" />
      </TouchableOpacity>
    </>
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
