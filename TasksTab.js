import React, { useContext } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

import { AppContext } from './AppContext';

export default function TasksTab() {
  const { tasks, toggleTask } = useContext(AppContext);
  const completedCount = tasks.filter((task) => task.completed).length;

  const renderTask = ({ item }) => (
    <View style={styles.card}>
      <Pressable
        style={[styles.checkButton, item.completed && styles.checkedButton]}
        onPress={() => toggleTask(item.id)}
      >
        <Text style={styles.checkText}>{item.completed ? '✓' : ''}</Text>
      </Pressable>

      <View style={styles.taskInfo}>
        <Text style={[styles.taskTitle, item.completed && styles.completedTitle]}>
          {item.title}
        </Text>
        <Text style={styles.subject}>{item.subject}</Text>
        <Text style={styles.dueDate}>Due: {item.dueDate || 'No due date'}</Text>
        <Text style={[styles.status, item.completed ? styles.completedStatus : styles.pendingStatus]}>
          {item.completed ? 'Completed' : 'Pending'}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>My Tasks</Text>
        <Text style={styles.subtitle}>Keep track of your school assignments.</Text>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryText}>Total Tasks: {tasks.length}</Text>
        <Text style={styles.summaryText}>Completed: {completedCount}</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tasks yet. Add your first assignment!</Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC' },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16 },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#172554' },
  subtitle: { color: '#64748B', fontSize: 14, marginTop: 6 },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#DBEAFE',
    borderRadius: 12,
  },
  summaryText: { color: '#1E40AF', fontWeight: 'bold', fontSize: 13 },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  checkButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  checkedButton: { backgroundColor: '#2563EB' },
  checkText: { color: '#FFFFFF', fontWeight: 'bold' },
  taskInfo: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 5 },
  completedTitle: { textDecorationLine: 'line-through', color: '#94A3B8' },
  subject: { color: '#475569', fontSize: 13, marginBottom: 4 },
  dueDate: { color: '#64748B', fontSize: 12 },
  status: { fontSize: 12, fontWeight: 'bold', marginTop: 8 },
  completedStatus: { color: '#16A34A' },
  pendingStatus: { color: '#D97706' },
  emptyText: { textAlign: 'center', color: '#64748B', marginTop: 40 },
});
