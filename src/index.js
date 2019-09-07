import React, { Fragment } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';

if (__DEV__) {
  import('./config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Hello Wsorlsssd</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
