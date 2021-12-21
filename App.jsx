import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './src/components/appBar';
import CircleButton from './src/components/circleButton';
import MemoList from './src/components/memoList';

// eslint-disable-next-line react/function-component-definition
export default function App() {
  return (
    <View style={styles.container}>

      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
