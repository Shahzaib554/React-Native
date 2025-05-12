import React from 'react';
import {View, Text, Button} from 'react-native';

const OnPress = () => {

  let name = "User";
  const getName = (name) => {
    name = 'john';
    console.log('Crypto: ', name);
  };

  return (
    <View>
      <Text style = {{color: 'white', fontSize: 30}}>OnPress</Text>
      <Button title='Press' onPress={() => getName("User")}/>
    </View>
  );
};

export default OnPress;
