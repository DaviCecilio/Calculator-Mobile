import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: { flex: 8 },

  headline: {
    marginTop: 60,
    marginBottom: 20,
    marginLeft: 20,
    fontWeight: '200',
    fontSize: 24,
  },

  itemContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },

  itemText: { fontWeight: 'bold' },

  containerInfo: {
    flex: 1,
  },

  contactButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  containerAuthor: {
    alignItems: 'center',
  },

  textAuthor: {
    fontSize: 16,
    paddingTop: 20,
  },
})
