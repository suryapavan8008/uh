import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';

const Welcome = () => {
  const navigation = useNavigation(); // Access the navigation object

  return (
    <View style={styles.container}>
        <StatusBar auto />
        <ImageBackground
      source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJALLRzduT-0V27ONA1TqfD28efBEXs8N_8w&s' }}
      style={styles.imageBackground}
    />
      <Text style={styles.text}>Welcome </Text>
      <Text style={styles.text}>TO</Text>
      <Text style={styles.text}>Multi App</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: '#fff' }}>Let's Go</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    color:"white",
    fontSize:80,
    fontWeight:"bold"
  },
  btn: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#007aff',
  },
  imageBackground:{
width:'100%',
height:1000,
position:'absolute'
  },
})
