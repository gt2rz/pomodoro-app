import React, {useEffect} from 'react';
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

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime === 0) {
            clearInterval(interval!);
            setIsRunning(false);
            setTime(options[status - 1].time * 60);
            return 0;
          }

          return prevTime - 1;
        });
      }, 10);
    } else {
      if (interval) {
        clearInterval(interval!);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, status]);

  const handleStartAndPause = () => {
    setIsRunning(!isRunning);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(options[status - 1].time * 60);
  };

  return (
    <SafeAreaView
      style={[styles.container, {backgroundColor: options[status - 1].color}]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text style={styles.text}>Pomodoro</Text>
          <Header status={status} setStatus={setStatus} setTime={setTime} />
          <Timer time={time} />
          <TouchableOpacity
            onPress={() => handleStartAndPause()}
            style={styles.button}>
            <Text style={[styles.textWhite, styles.textCenter]}>
              {isRunning ? 'PAUSE' : 'START'}
            </Text>
          </TouchableOpacity>
          {isRunning && (
            <TouchableOpacity
              onPress={() => handleStop()}
              style={[styles.button, styles.buttonStop]}>
              <Text style={[styles.textWhite, styles.textCenter]}>STOP</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
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
  buttonStop: {
    backgroundColor: 'red',
  },
});

export default App;
