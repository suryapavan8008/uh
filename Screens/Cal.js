import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList } from 'react-native-gesture-handler';

const Screen1 = ({ navigation }) => {
  const Products = [
    { imageUrl: require('D:\reactnative\ToDoApp\assets\adaptive-icon.png') },
    { imageUrl: require('D:\reactnative\ToDoApp\assets\adaptive-icon.png') },
    { imageUrl: require('D:\reactnative\ToDoApp\assets\adaptive-icon.png') },
    { imageUrl: require('D:\reactnative\ToDoApp\assets\adaptive-icon.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={30} />
        <AntDesign name="bars" size={30} title="toggle " onPress={() => navigation.toggleDrawer()} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Food Menu</Text>
        <Text style={styles.subtitle}>Choose your best food and have a great day</Text>
      </View>
      <View style={styles.productContainer}>
        <FlatList
          style={styles.productList}
          data={Products}
          renderItem={({ item }) => (
            <View style={styles.productItem}>
              <Image source={item.imageUrl} style={styles.image} />
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: '#666',
  },
  productContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  productList: {
    flex: 1,
  },
  productItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default Screen1;
