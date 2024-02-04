import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from './src/components/Header';

import {options} from './src/constants/options';
import Timer from './src/components/Timer';

function App(): React.JSX.Element {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [status, setStatus] = useState(options[0].id);

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: options[status - 1].color}]}>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.text}>Pomodoro</Text>
          <Header status={status} setStatus={setStatus} setTime={setTime} />
          <Timer time={time} />
          <TouchableOpacity
            onPress={() => setIsRunning(!isRunning)}
            style={styles.button}>
            <Text style={[styles.textWhite, styles.textCenter]}>
              {isRunning ? 'STOP' : 'START'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 10,
    borderColor: 'transparent',
    backgroundColor: '#333',
  },
  textWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default App;
