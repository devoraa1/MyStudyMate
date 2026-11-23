import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';

import { AppContext } from './AppContext';

export default function AddTaskTab() {
  const { addTask } = useContext(AppContext);

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddTask = () => {
    if (!title.trim() || !subject.trim()) {
      setMessage('Please enter a task title and subject.');
      return;
    }

    setMessage('');
    setSaving(true);

    setTimeout(() => {
      addTask({
        title: title.trim(),
        subject: subject.trim(),
        dueDate: dueDate.trim(),
      });
      setTitle('');
      setSubject('');
      setDueDate('');
      setSaving(false);
      setMessage('Task added successfully!');
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Add New Task</Text>
        <Text style={styles.subtitle}>Organize your school activities.</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Assignment Title</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter assignment title"
          value={title}
          onChangeText={setTitle}
          editable={!saving}
        />

        <Text style={styles.label}>Subject</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter subject name"
          value={subject}
          onChangeText={setSubject}
          editable={!saving}
        />

        <Text style={styles.label}>Due Date</Text>
        <TextInput
          style={styles.input}
          placeholder="Example: December 10, 2026"
          value={dueDate}
          onChangeText={setDueDate}
          editable={!saving}
        />

        {saving && <Text style={styles.savingText}>Saving your task...</Text>}
        {!!message && !saving && <Text style={styles.message}>{message}</Text>}

        <Pressable
          style={[styles.button, saving && styles.disabledButton]}
          onPress={handleAddTask}
          disabled={saving}
        >
          <Text style={styles.buttonText}>{saving ? 'Saving...' : 'Add Task'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC' },
  header: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 16 },
  heading: { fontSize: 28, fontWeight: 'bold', color: '#172554' },
  subtitle: { color: '#64748B', fontSize: 14, marginTop: 6 },
  form: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 20,
    borderRadius: 14,
    elevation: 2,
  },
  label: { fontSize: 14, fontWeight: 'bold', color: '#334155', marginBottom: 8, marginTop: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 9,
    padding: 13,
    fontSize: 14,
    color: '#1E293B',
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: { backgroundColor: '#93C5FD' },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
  savingText: { color: '#2563EB', fontSize: 14, marginTop: 16, textAlign: 'center' },
  message: { color: '#15803D', fontSize: 14, marginTop: 16, textAlign: 'center' },
});
