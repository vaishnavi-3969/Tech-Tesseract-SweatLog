import { View, Text } from "react-native";
import styles from "../styles";

function ExerciseListItem({ item }) {
    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDetails}>
                Muscle: {item.muscle.toUpperCase()} |
                Equipment: {item.equipment.toUpperCase()}
            </Text>
        </View>
    )
}

export default ExerciseListItem;
