import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const AddProductScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Add Product</Text>
      </SafeAreaView>
    </>
  );
};

export default AddProductScreen;