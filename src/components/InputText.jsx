import {View, Text, TextInput, Button} from 'react-native';
import React, { useState } from 'react';

const InputText = () => {
    const [userName, setuserName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>InputText</Text>
      <Text style={{fontSize: 20, margin: 10}}>UserName: {userName}</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 2,
          borderColor: 'green',
          margin: 10
        }}
        placeholder="Enter your name"
        placeholderTextColor="gray"
        onChangeText={(text) => setuserName(text)}
        value={userName}
      />
      <Button title='clear' onPress={()=>setuserName('')}/>
    </View>
  );
};

export default InputText;
