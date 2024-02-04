import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Timer({time}: {time: number}) {
  const minutes = `${Math.floor(time / 60)
    .toString()
    .padStart(2, '0')}`;

  const seconds = `${(time % 60).toString().padStart(2, '0')}`;

  const formattedTime = `${minutes}:${seconds}`;

  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formattedTime}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 10,
  },
  time: {
    fontSize: 80,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
