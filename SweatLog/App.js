import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';


export default function App() {
  const exercise = exercises[0];

  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>

        <Text style={{ fontSize: 20, fontWeight: '700' }}>{exercise.name}</Text>
        <Text style={{ color: 'dimgray' }}>Muscle: {exercise.muscle.toUpperCase()} | Equipment: {exercise.equipment}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  }
})

