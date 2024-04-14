import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, Image } from 'react-native';
import styles from '../../styles';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';
import { auth } from '../components/config';


export default function Welcome() {

    return (
        <View style={styles.container}>
            <Text>User Email: {auth.currentUser.email}</Text>
            <Text>User ID: {auth.currentUser.uid}</Text>
            \
            <FlatList
                data={exercises}
                keyExtractor={(item, index) => item.name + index}
                renderItem={({ item }) => {
                    return (
                        <ExerciseListItem item={item} />
                    )
                }}
            />

            <StatusBar style="auto" />
        </View>
    )
}