import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { getDatabase, ref, push, set } from "firebase/database";
import { auth } from '../components/config';

export default function NewSetInput() {
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');

  const saveSet = async () => {
    try {
      const db = getDatabase();
      const setsRef = ref(db, `sets/${auth.currentUser.uid}`);
      const newSetRef = push(setsRef);
      await set(newSetRef, {
        reps: parseInt(reps),
        weight: parseInt(weight),
        timestamp: new Date().toISOString()
      });
      console.log('Set saved successfully!');
      setReps('');
      setWeight('');
    } catch (error) {
      console.error('Error saving set:', error);
    }
  };

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
        onPress={saveSet}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
