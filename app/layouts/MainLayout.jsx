import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';  // Import Header from layouts folder
import Footer from './Footer';  // Import Footer from layouts folder

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      {children}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;