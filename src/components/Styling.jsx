import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from '../style/style';



const Styling = () => {
  return (
    <View>
      {/* Inline Styling */}
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'crimson',
          color: 'white',
          padding: 10,
        }}>
        IN Styling
      </Text>

      {/* Internal Styling */}

      <Text style={style.text}>Internal Styling</Text>

      {/* Style Styling */}

      <Text style={styles.text}>IN Styling</Text>

      <Text style={[styles.text, style.text, {backgroundColor: 'red'}]}>Mix Styling</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    color: 'white',
    backgroundColor: 'green',
    fontSize: 30,
    marginVertical: 10,
    padding: 10,
    textAlign: 'center',
    borderColor: 'lightgreen',
    borderWidth: 3,
  },
});

export default Styling;
