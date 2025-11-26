import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/theme';

export default function ProgressBar({ bgcolor, completed }) {
  return (
    <View style={styles.containerStyles}>
      <View
        style={[
          styles.fillerStyles,
          { width: `${completed}%`, backgroundColor: bgcolor },
        ]}
      >
        <Text style={styles.labelStyles}>{`${completed}%`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    height: 30,
    width: '90%',
    backgroundColor: Colors.primary,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: 'center',
  },
  fillerStyles: {
    height: '100%',
    borderRadius: 50,
    justifyContent: 'center',
  },
  labelStyles: {
    color: Colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
