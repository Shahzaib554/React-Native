import {Text, FlatList} from 'react-native';
import React from 'react';
import {users} from './userContactInfo';
import ContactItems from './ContactItems';
import {styles} from './style';

const ContactListScreen = () => {
  // Function to render each item in the FlatList
  const renderItem = ({item}) => {
    return <ContactItems name={item.name} email={item.email} />;
  };

  // Render the FlatList with the user data
  // Using keyExtractor to ensure each item has a unique key
  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => {
        item.id;
      }}
      ListHeaderComponent={
        <Text style={styles.handing}>Contact Old Template</Text>
      }
      contentContainerStyle={styles.list}
    />
  );
};

export default ContactListScreen;
