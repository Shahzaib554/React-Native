import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';
import Child from './Child';

const pros = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  return (
    <View>
      <Text style={{fontSize: 30}}>pros</Text>
      <Button title="Counter" onPress={() => setCount(count + 1)} />
      <View style={{marginTop: 20}}>
        <Button title="item" onPress={() => setItem(item * 10)} />
      </View>
      <Child data={count} item={item} />
    </View>
  );
};

export default pros;
