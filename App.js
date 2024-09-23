import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const notifications = [
  {
    id: '1',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
  {
    id: '2',
    title: 'Bạn có khách hàng mới!',
    description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    date: '20/08/2020, 06:00',
    icon: 'group',
  },
  {
    id: '3',
    title: 'Khách hàng được chia sẻ bị trùng',
    description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'group',
  },
  {
    id: '4',
    title: 'Khách hàng được thêm bị trùng',
    description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.',
    date: '20/08/2020, 06:00',
    icon: 'group',
  },
  {
    id: '5',
    title: 'Công việc sắp đến hạn trong hôm nay',
    description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
  {
    id: '6',
    title: 'Công việc đã quá hạn',
    description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.',
    date: '20/08/2020, 06:00',
    icon: 'check-circle',
  },
];

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

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <View style={styles.separator} />
      <FlatList
        data={notifications}
        keyExtractor={item => item.id}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  separator: {
    height: 2, // Chiều cao của thanh ngang
    borderBottomWidth: 6, // Độ dày của viền
    borderBottomColor: '#ccc', // Màu xám
    marginBottom: 0, // Không có khoảng cách dưới
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  highlight: {
    backgroundColor: '#e0f7fa', // Xanh nhạt
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

export default App;
