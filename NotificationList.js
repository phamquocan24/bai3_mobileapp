import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NotificationItem from './NotificationItem';

const NotificationList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <NotificationItem
          title={item.title}
          description={item.description}
          date={item.date}
          icon={item.icon}
          isHighlighted={item.id === '1' || item.id === '2' || item.id === '4'}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 2,
    borderBottomWidth: 6,
    borderBottomColor: '#ccc',
    marginBottom: 0,
  },
});

export default NotificationList;
