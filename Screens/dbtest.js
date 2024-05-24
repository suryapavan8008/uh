import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, Button, View, TouchableOpacity, Text, FlatList, Alert } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { FontAwesome } from 'react-native-vector-icons';


const firebaseConfig = {
  apiKey: "AIzaSyAjI0xENv-fCENlSW-t_HKAKHXEzV5HBro",
  authDomain: "test-cb384.firebaseapp.com",
  projectId: "test-cb384",
  storageBucket: "test-cb384.appspot.com",
  messagingSenderId: "1064600201035",
  appId: "1:1064600201035:web:532d93dd909be861a0aace",
  measurementId: "G-Y31KXWDYME"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [showTodos, setShowTodos] = useState(false);

  const handleSave = async () => {
    try {
      await addDoc(collection(db, 'todos'), {
        Name: text,
        createdAt: new Date(),
        Id: text
      });
      setText(''); 
    } catch (error) {
      console.error('Error saving text: ', error);
    }
  };

  const confirmDelete = (itemId) => {
    Alert.alert(
      'Delete Item',
      'Are you sure you want to delete this item?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => handleDelete(itemId)
        }
      ],
      { cancelable: false }
    );
  };

  const handleDelete = async (itemId) => {
    try {
      await deleteDoc(doc(db, 'todos', itemId));
      setTodos(todos.filter(item => item.id !== itemId));
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  const handleToggleTodos = async () => {
    if (!showTodos) {
      try {
        const querySnapshot = await getDocs(collection(db, 'todos'));
        const fetchedTodos = [];
        querySnapshot.forEach(doc => {
          fetchedTodos.push({ ...doc.data(), id: doc.id });
        });
        setTodos(fetchedTodos);
        setShowTodos(true);
      } catch (error) {
        console.error('Error fetching todos: ', error);
      }
    } else {
      setTodos([]);
      setShowTodos(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add To Do"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity onPress={handleSave}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Save</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToggleTodos}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>{showTodos ? 'Hide Todos' : 'Show Todos'}</Text>
        </View>
      </TouchableOpacity>
      {showTodos && (
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <View style={styles.todoItem}>
              <Text>{item.Name}</Text>
              <TouchableOpacity onPress={() => confirmDelete(item.id)}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item?.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#007aff',
    borderColor: '#007aff',
    marginBottom: 10
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  }
});
