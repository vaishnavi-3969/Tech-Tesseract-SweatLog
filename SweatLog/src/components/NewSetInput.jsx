import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function NewSetInput() {
  const [reps, setReps] = useState();
  const [weight, setWeight] = useState();


  const addSet = () => {
    console.warn("Add Set", reps, weight);

    //save data to db

    setReps('');
    setWeight('')
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
        style={styles.button}
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
    borderRadius: 'gainsboro',
    padding: 10,
    flex: 1,
    borderRadius: 5,
  },
})





