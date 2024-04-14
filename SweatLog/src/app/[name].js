import { useLocalSearchParams } from 'expo-router';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import exercises from '../../assets/data/exercises.json';
import styles from '../../styles';
import { Stack } from "expo-router";
import { useEffect, useState } from 'react';
import NewSetInput from '../components/NewSetInput';
import { getDatabase, ref, onValue } from 'firebase/database';

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();
  const [isIntructionExpanded, setIsInstructionExpanded] = useState(false);
  const exercise = exercises.find(item => item.name === params.name)
  const [exerciseSets, setExerciseSets] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const db = getDatabase();
      const setsRef = ref(db, `users/vaishnavikale3011gmailcom/sets`);
      onValue(setsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const sets = Object.values(data);
          setExerciseSets(sets);
        } else {
          setExerciseSets([]);
        }
      });
    };

    fetchData();

    // Clean up the listener
    return () => {
      const db = getDatabase();
      const setsRef = ref(db, `users/vaishnavikale3011gmailcom/sets`);
      onValue(setsRef, null);
    };
  }, []);

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

      <NewSetInput />
      {exerciseSets.map((set, index) => (
        <View key={index} style={styles.setContainer}>
          <Text>Set {index + 1}: Reps - {set.reps}, Weight - {set.weight}</Text>
        </View>
      ))}
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

