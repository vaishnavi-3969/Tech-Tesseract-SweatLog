import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gainsboro',
      justifyContent: 'center',
      padding: 10,
      marginTop: 70,
    },
    exerciseContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      marginTop: 7,
      shadowOffset: { width: 3, height: 6 },
      gap: 5,
    },
    exerciseName: {
      fontSize: 20,
      fontWeight: '700',
    },
    exerciseDetails: {
      color: 'dimgray',
    },
    subValue : {
      textTransform: 'uppercase'
    }
    
  })


export default styles;