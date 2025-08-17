import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  handing: {
    fontSize: 30,
    color: 'crimson',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  list: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: 'crimson',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize:18,
    color: '#fff',
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'yellow',
  },
});
