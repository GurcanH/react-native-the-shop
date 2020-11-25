import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';

const ProductDetailsScreen = props => {
  const selectedProduct = props.navigation.getParam('product');

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button color={Colors.primary} title='Add to Cart' onPress={() => {}} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('product').title
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center'
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 20
  }
});

export default ProductDetailsScreen;
