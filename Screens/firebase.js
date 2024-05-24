import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase, ref, set } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjI0xENv-fCENlSW-t_HKAKHXEzV5HBro",
  authDomain: "test-cb384.firebaseapp.com",
  projectId: "test-cb384",
  storageBucket: "test-cb384.appspot.com",
  messagingSenderId: "1064600201035",
  appId: "1:1064600201035:web:532d93dd909be861a0aace",
  measurementId: "G-Y31KXWDYME"
};

const YourComponent = () => {
    const navigation = useNavigation();
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);
    // Get Firebase analytics instance
    const analytics = getAnalytics(app);
    // Get Firebase database instance
    const db = getDatabase();

    const handleSignIn = async () => {
        try {
            // Store the form data in Firebase database
            await set(ref(db, 'formData'), form);

            // Handle successful sign-in
            Alert.alert('Success', 'Data stored successfully!');
            navigation.navigate('screen3');
        } catch (error) {
            // Handle errors
            console.error('Error storing data:', error);
            Alert.alert('Error', 'Failed to store data');
        }
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome back!</Text>
                    <Text style={styles.subtitle}>Sign in to your account</Text>
                </View>

                <View style={styles.form}>
                    {/* Input fields */}
                </View>

                <TouchableOpacity onPress={handleSignIn}>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>Sign in</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    header: {
        marginVertical: 36,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#1d1d1d',
        marginBottom: 6,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
        textAlign: 'center',
    },
    form: {
        marginBottom: 24,
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
    },
    btnText: {
        fontSize: 17,
        lineHeight: 24,
        fontWeight: '600',
        color: '#fff',
    },
});

export default YourComponent;
