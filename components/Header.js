import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TitleText from './TitleText';
import Colors from '../constants/colors';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Header;
