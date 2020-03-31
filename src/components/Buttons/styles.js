import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },

  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
    fontWeight: 'bold',
  },
  buttonEquals: {
    fontWeight: 'bold',
  },
})
