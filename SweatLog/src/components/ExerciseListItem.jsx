import { View, Text, Pressable } from "react-native";
import styles from "../../styles";
import { Link } from 'expo-router';

export default function ExerciseListItem({ item }) {
    return (
        <Link href={`${item.name}`} asChild>
            <Pressable style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text style={styles.exerciseDetails}>
                    <Text style={styles.subValue}>{item.muscle} | {' '}</Text>
                    <Text style={styles.subValue}>{item.equipment}</Text>
                </Text>
            </Pressable>
        </Link>
    )
}

