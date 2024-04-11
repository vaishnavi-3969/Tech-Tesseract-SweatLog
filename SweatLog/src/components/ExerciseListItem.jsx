import { View, Text } from "react-native";
import styles from "../../styles";

function ExerciseListItem({ item }) {
    return (
        <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.name}</Text>
            <Text style={styles.exerciseDetails}>
                <Text style={styles.subValue}>{item.muscle} | {' '}</Text>
                <Text style={styles.subValue}>{item.equipment}</Text>
            </Text>
        </View>
    )
}

export default ExerciseListItem;
