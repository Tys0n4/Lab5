import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 ToDoList App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: '#4CAF50',
    width: '100%',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: 'white',
  },
});

export default Footer;
