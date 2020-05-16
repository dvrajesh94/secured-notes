import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  Animated,
  PanResponder,
  Platform,
} from 'react-native';
import {withStyles} from '@ui-kitten/components';

const SUPPORTED_ORIENTATIONS = [
  'portrait',
  'portrait-upside-down',
  'landscape',
  'landscape-left',
  'landscape-right',
];

class ActionNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      animatedHeight: new Animated.Value(0),
      pan: new Animated.ValueXY(),
    };

    this.createPanResponder(props);
  }

  componentDidUpdate({height: prevHeight}) {
    if (!this.state.modalVisible) {
      return;
    }
    const {height: currentHeight, openDuration} = this.props;

    if (prevHeight !== currentHeight) {
      Animated.timing(this.state.animatedHeight, {
        useNativeDriver: false,
        toValue: currentHeight,
        duration: openDuration,
      }).start();
    }
  }

  setModalVisible(visible, props) {
    const {
      height,
      minClosingHeight,
      openDuration,
      closeDuration,
      onClose,
      onOpen,
    } = this.props;
    const {animatedHeight, pan} = this.state;
    if (visible) {
      this.setState({modalVisible: visible});
      if (typeof onOpen === 'function') {
        onOpen(props);
      }
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: height,
        duration: openDuration,
      }).start();
    } else {
      Animated.timing(animatedHeight, {
        useNativeDriver: false,
        toValue: minClosingHeight,
        duration: closeDuration,
      }).start(() => {
        pan.setValue({x: 0, y: 0});
        this.setState({
          modalVisible: visible,
          animatedHeight: new Animated.Value(0),
        });

        if (typeof onClose === 'function') {
          onClose(props);
        }
      });
    }
  }

  createPanResponder(props) {
    const {closeOnDragDown, height} = props;
    const {pan} = this.state;
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => closeOnDragDown,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, {dy: pan.y}], {useNativeDriver: false})(
            e,
            gestureState,
          );
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (height / 4 - gestureState.dy < 0) {
          this.setModalVisible(false);
        } else {
          Animated.spring(pan, {
            toValue: {x: 0, y: 0},
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  open(props) {
    this.setModalVisible(true, props);
  }

  close(props) {
    this.setModalVisible(false, props);
  }

  render() {
    const {
      animationType,
      closeOnDragDown,
      dragFromTopOnly,
      closeOnPressMask,
      closeOnPressBack,
      children,
      customStyles,
      keyboardAvoidingViewEnabled,
      eva: {style: styles},
    } = this.props;
    const {animatedHeight, pan, modalVisible} = this.state;
    const panStyle = {
      transform: pan.getTranslateTransform(),
    };

    return (
      <Modal
        transparent
        animationType={animationType}
        visible={modalVisible}
        supportedOrientations={SUPPORTED_ORIENTATIONS}
        onRequestClose={() => {
          if (closeOnPressBack) {
            this.close();
          }
        }}>
        <KeyboardAvoidingView
          enabled={keyboardAvoidingViewEnabled}
          behavior="padding"
          style={[styles.wrapper, customStyles.wrapper]}>
          <TouchableOpacity
            style={styles.mask}
            activeOpacity={1}
            onPress={() => (closeOnPressMask ? this.close() : null)}
          />
          <Animated.View
            {...!dragFromTopOnly && this.panResponder.panHandlers}
            style={[
              panStyle,
              styles.container,
              {height: animatedHeight},
              customStyles.container,
            ]}>
            {closeOnDragDown && (
              <View
                {...dragFromTopOnly && this.panResponder.panHandlers}
                style={styles.draggableContainer}>
                <View
                  style={[styles.draggableIcon, customStyles.draggableIcon]}
                />
              </View>
            )}
            {children}
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    );
  }
}

ActionNavigation.propTypes = {
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  height: PropTypes.number,
  minClosingHeight: PropTypes.number,
  openDuration: PropTypes.number,
  closeDuration: PropTypes.number,
  closeOnDragDown: PropTypes.bool,
  closeOnPressMask: PropTypes.bool,
  dragFromTopOnly: PropTypes.bool,
  closeOnPressBack: PropTypes.bool,
  keyboardAvoidingViewEnabled: PropTypes.bool,
  customStyles: PropTypes.objectOf(PropTypes.object),
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  children: PropTypes.node,
};

ActionNavigation.defaultProps = {
  animationType: 'slide',
  height: 260,
  minClosingHeight: 0,
  openDuration: 0,
  closeDuration: 0,
  closeOnDragDown: true,
  dragFromTopOnly: false,
  closeOnPressMask: true,
  closeOnPressBack: true,
  keyboardAvoidingViewEnabled: Platform.OS === 'ios',
  customStyles: {},
  onClose: null,
  onOpen: null,
  children: <View />,
};

export default withStyles(ActionNavigation, theme => ({
  wrapper: {
    flex: 1,
  },
  mask: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    backgroundColor: theme['background-basic-color-4'],
    height: 0,
    overflow: 'hidden',
  },
  draggableContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  draggableIcon: {
    width: 35,
    height: 5,
    borderRadius: 5,
    margin: 10,
    backgroundColor: theme['border-primary-color-2'],
  },
}));
