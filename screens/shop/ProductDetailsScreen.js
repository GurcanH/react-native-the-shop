import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

const ProductDetailsScreen = props => {
  const selectedProduct = props.navigation.getParam('product');

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  );
};

ProductDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('product').title
  };
};

const styles = StyleSheet.create({});

export default ProductDetailsScreen;
