import MainLayout from '../layouts/MainLayout';
import React, { useState } from 'react';  // Correct import of useState
import { View, Text, Button, StyleSheet } from 'react-native';
import ToDoList from '../components/ToDoList'; // Adjust path accordingly
import ToDoForm from '../components/ToDoForm';  // Adjust path accordingly

export default function HomeScreen({ navigation }) {
  // Declare state for tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <MainLayout>
      <Text style={styles.title}>Home Screen</Text>
      <ToDoList tasks={tasks} />  {/* Pass tasks to ToDoList */}
      <ToDoForm />  {/* Render ToDoForm */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
