import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { getDatabase, ref, push } from "firebase/database";
import { app } from '../components/config';

export default function NewSetInput() {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const db = getDatabase(app);

  const addSet = () => {
    console.warn("Add Set", reps, weight);

    // Save data to Firebase
    saveSetToFirebase(reps, weight);

    // Clear input fields after adding set
    setReps('');
    setWeight('');
  }

  const saveSetToFirebase = (reps, weight) => {
    const setsRef = ref(db, 'sets');
    push(setsRef, {
      reps: reps,
      weight: weight
    }).then(() => {
      console.log('Set added to Firebase');
    }).catch((error) => {
      console.error('Error adding set to Firebase: ', error);
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        value={reps}
        placeholder='Reps'
        style={styles.input}
        onChangeText={setReps}
        keyboardType='numeric'
      />
      <TextInput
        value={weight}
        placeholder='Weight'
        style={styles.input}
        onChangeText={setWeight}
        keyboardType='numeric'
      />
      <Button
        title='Add'
        onPress={addSet}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 5,
  },
});
