import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Logo from '../../assets/images/logo.png';
import { Animated, Easing, Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function App() {
    
    const [fadeAnim] = useState(new Animated.Value(0));
    useEffect(() => {
        SplashScreen.preventAutoHideAsync();
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }
        ).start(() => SplashScreen.hideAsync());
    }, []);

    const navigation = useNavigation();

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <Image
                source={Logo}
                style={styles.logo}
            />
            <Text style={styles.appName}>SweatLog</Text>
            <Text style={styles.slogan}>Track your workouts, achieve your goals!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#312F2F',
        alignItems: 'center',

    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: "center",
        marginTop: 50,
        borderRadius: 100,
    },
    appName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 20,
    },
    slogan: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF5733',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
