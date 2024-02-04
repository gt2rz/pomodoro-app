import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {options} from '../constants/options';

export default function Header({
  status,
  setStatus,
  setTime,
}: {
  status: number;
  setStatus: Function;
  setTime: Function;
}) {
  const handlePress = (index: number) => {
    const fitleredOption = options.filter(option => option.id === index);

    setStatus(fitleredOption[0].id);
    setTime(fitleredOption[0].time * 60);
  };

  return (
    <View style={styles.container}>
      {options.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handlePress(item.id)}
          style={[styles.button, status === item.id && styles.buttonActive]}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: 'transparent',
  },
  buttonActive: {
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'white',
  },
});
