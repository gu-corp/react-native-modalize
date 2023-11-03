import React, { useRef } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import { Modalize } from 'react-native-modalize';

const MyModalize = () => {
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef?.current?.open();
  };
  const onClose = () => {
    modalizeRef?.current?.close();
  };
  const renderFloatingFooterComponent = () => {
    return (
      <View
        style={{
          height: 50,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          width: '100%',
          borderTopWidth: 0.5,
          borderTopColor: 'gray',
          paddingHorizontal: 20,
        }}
      >
        <Text>delete</Text>
        <Text>edit</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={onOpen}>
        <Text> onOpen</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        modalStyle={[styles.modalStyle]}
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
          scrollEnabled: false,
        }}
        {...(Platform.OS === 'android' && { panGestureComponentEnabled: true })}
        withHandle={false}
        closeModal={onClose}
        snapPoint={400}
        FloatingFooterComponent={renderFloatingFooterComponent}
        useNativeDriver={true}
        tapGestureEnabled={false}
        modalHeight={750}
        closeSnapPointStraightEnabled={false}
        customRenderer={
          <Animated.ScrollView
            style={{
              flex: 1,
              marginTop: 100,
            }}
          >
            <View style={{ backgroundColor: 'red' }}>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
              <Text>1</Text>
            </View>

            <TouchableOpacity onPress={onClose}>
              <Text>onClose</Text>
            </TouchableOpacity>
          </Animated.ScrollView>
        }
      />
    </SafeAreaView>
  );
};

export default MyModalize;
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
  },
});
