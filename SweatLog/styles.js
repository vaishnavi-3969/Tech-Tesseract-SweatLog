import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gainsboro',
      justifyContent: 'center',
      padding: 10,
      gap: 10,
    },
    exerciseContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      marginTop: 7,
      shadowOffset: { width: 3, height: 6 },
      gap: 5,
      marginHorizontal: 3,
      //shadow
      shadowColor: 'black',
      shadowOffset : {
        width: 0,
        height: 1
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
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
    },
    instructions:{
      fontSize: 16,
      lineHeight: 22,
    },
    panel:{
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
    },
  })


export default styles;