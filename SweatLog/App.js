import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from './assets/data/exercises.json';
import ExerciseListItem from './components/ExerciseListItem';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => {
          return (
            <ExerciseListItem item={item}/>
          )
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}


