import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import exercises from './assets/data/exercises.json';
import { StyleSheet } from 'react-native';
import { styled } from 'nativewind';


const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  const exercise = exercises[0];
  
  return (
    <StyledView className='items-center justify-center flex-1'>
      <StyledText className='text-slate-800'>{exercise.name}</StyledText>
      <StyledText>Muscle: {exercise.muscle} | Equipment: {exercise.equipment}</StyledText>
      <StatusBar style="auto" />
    </StyledView>
  );
}



