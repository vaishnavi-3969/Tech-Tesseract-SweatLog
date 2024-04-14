import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';
import styles from '../../styles';
import exercises from '../../assets/data/exercises.json';
import ExerciseListItem from '../components/ExerciseListItem';


export default function Welcome() {
    return (
        <View style={styles.container}>
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