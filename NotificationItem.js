import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const NotificationItem = ({ title, description, date, icon, isHighlighted }) => (
  <View style={[styles.notificationContainer, isHighlighted && styles.highlight]}>
    <Icon name={icon} size={40} color="#344796" style={styles.icon} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  notificationContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  highlight: {
    backgroundColor: '#e0f7fa',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5,
  },
  description: {
    color: '#555',
    marginBottom: 5,
    fontSize: 12,
  },
  date: {
    color: '#999',
    fontSize: 12,
  },
});

export default NotificationItem;
