import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';


export default function App() {
  const exercise = exercises[4];

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.exerciseContainer}>
              <Text style={{ fontSize: 20, fontWeight: '700' }}>{index}. {item.name}</Text>
              <Text style={{ color: 'dimgray' }}>
                Muscle: {item.muscle.toUpperCase()} |
                Equipment: {item.equipment.toUpperCase()}
              </Text>
            </View>
          )
        }}
      />

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
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 6 },
    gap: 5,
  }
})

