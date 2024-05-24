import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const NotesApp = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes(prevNotes => [...prevNotes, newNote]);
      setNewNote('');
    }
  };

  const deleteNote = (index) => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Notes App</Text>
      </View>
      <ScrollView style={styles.content}>
        {notes.map((note, index) => (
          <View key={index} style={styles.note}>
            <Text style={styles.noteText}>{note}</Text>
            <TouchableOpacity onPress={() => deleteNote(index)}>
              <Icon name="delete" size={20} color="#ff0000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a new note"
          value={newNote}
          onChangeText={text => setNewNote(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addNote}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
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
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  note: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  noteText: {
    flex: 1,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NotesApp;
