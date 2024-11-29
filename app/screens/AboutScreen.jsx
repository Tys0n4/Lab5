import MainLayout from '../layouts/MainLayout';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.info}>App Name: ToDoList</Text>
      <Text style={styles.info}>Developer: Thai Nguyen</Text>
      <Text style={styles.info}>Date: {currentDate}</Text>
      <Button
        title="Go Back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
  },
});
