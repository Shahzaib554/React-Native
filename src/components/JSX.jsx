import { View, Text } from 'react-native';
import React from 'react';

const JSX = () => {

    let name = 'Shahzaib'
    const age = () => {
        return 25
    }
    return (

    <View>
      <Text style= {{fontSize: 30}}>JSX</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{2+2}</Text>
      <Text style={{fontSize: 30}}>{age()}</Text>
    </View>
  )
}

export default JSX;