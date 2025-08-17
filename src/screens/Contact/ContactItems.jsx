import {View, Text} from 'react-native';
import React from 'react';
import { styles } from './style';

const ContactItems = ({name, email}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ContactItems;
