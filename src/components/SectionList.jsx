import {
  View,
  Text,
  SectionList as RNSectionList,
  StyleSheet,
} from 'react-native';
import React from 'react';

const listItems = [
  {
    title: 'Fruits',
    data: [
      {
        id: 1,
        name: 'Apple',
      },
      {
        id: 2,
        name: 'Mango',
      },
      {
        id: 3,
        name: 'Orange',
      },
    ],
  },
  {
    title: 'Vegetables',
    data: [
      {
        id: 4,
        name: 'Carrot',
      },
      {
        id: 5,
        name: 'Potato',
      },
      {
        id: 6,
        name: 'Tomato',
      },
    ],
  },
];

const SectionList = () => {
  const renderItem = ({item}) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({section: {title}}) => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <RNSectionList
        sections={listItems}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
    letterSpacing: 0.3,
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 16,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#007AFF',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
  },
});

export default SectionList;
