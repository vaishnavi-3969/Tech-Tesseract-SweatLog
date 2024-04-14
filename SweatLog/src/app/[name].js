import { useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import exercises from '../../assets/data/exercises.json';
import styles from '../../styles';
import { Stack } from "expo-router";
import { useState } from 'react';
import NewSetInput from '../components/NewSetInput';

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const [isIntructionExpanded, setIsInstructionExpanded] = useState(false);
  const exercise = exercises.find(item => item.name === params.name)

  if (!exercise) {
    return <Text>Exercise not found!</Text>
  }
  return (
    <ScrollView contentContainerStyle={style.container}>
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

      <View style={styles.panel}>
        <Text style={styles.instructions} numberOfLines={isIntructionExpanded ? 0 : 3}>
          {exercise.instructions}
        </Text>
        <Text onPress={() => setIsInstructionExpanded(!isIntructionExpanded)} style={styles.seeMore}>
          {isIntructionExpanded ? "See Less" : "See More"}
        </Text>
      </View>

      <NewSetInput/>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'gainsboro',
    padding: 10,
    gap: 10,
  },
})

