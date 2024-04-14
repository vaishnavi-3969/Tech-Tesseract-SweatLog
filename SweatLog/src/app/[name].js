import { useLocalSearchParams } from 'expo-router';
import { View, Text,ScrollView } from 'react-native'
import exercises from '../../assets/data/exercises.json';
import styles from '../../styles';
import { Stack } from "expo-router";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const exercise = exercises.find(item => item.name === params.name)

  if (!exercise) {
    return <Text>Exercise not found!</Text>
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen
        options={{ title: exercise.name }}
      />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseDetails}>
          <Text style={styles.subValue}>{exercise.muscle} | {' '}</Text>
          <Text style={styles.subValue}>{exercise.equipment}</Text>
        </Text>
      </View>

      <ScrollView style={styles.panel}>
        <Text style={styles.instructions}>
          {exercise.instructions}
        </Text>
      </ScrollView>
    </ScrollView>
  )
}

