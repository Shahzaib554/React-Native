import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Ali');
  const updateName = () => {
    setName('Ahmad');
  };
  return (
    <View>
      <Text>UseStateHook</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      {/* <Button
        title="Change Name"
        onPress={() => {
          setName('Ahmad');
        }}
      /> */}
      <Button
        title="Change Name"
        onPress={() => {
          updateName();
        }}
      />
    </View>
  );
};

export default UseStateHook;
