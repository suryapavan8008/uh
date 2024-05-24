import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const AllApps = () => {
  const navigation = useNavigation();

  const goToTodoList = () => {
    navigation.navigate('dbtest');
  };

  const goToCalculator = () => {
    navigation.navigate('Cal');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonsContainer}>
      <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJALLRzduT-0V27ONA1TqfD28efBEXs8N_8w&s' }}
      style={styles.imageBackground}
    />
        <TouchableOpacity style={styles.button} onPress={goToTodoList}>
          <Text style={styles.buttonText}>To Do List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToCalculator}>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={goToTodoList}>
          <Text style={styles.buttonText}>Make Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToCalculator}>
          <Text style={styles.buttonText}>Numbers</Text>
        </TouchableOpacity>
        
      </View>

    </SafeAreaView>
  );
};

export default AllApps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageBackground:{
    width:'100%',
    height:1000,
    position:'absolute'
      },
});
