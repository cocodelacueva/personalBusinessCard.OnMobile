import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';

//hook
import { isLandscape } from '../hooks/useOrientation';

const HomeScreen = ({navigation}) => {
  
  const landscape = isLandscape();

  console.log('home',landscape)
  let seconds = 0;
  let interval;
  const timeToLoadConfig = 20;
  const timeToShare = 10;
  let card = 'card1';
  
  //set interval to add 1 to seconds and removal of interval
  const startCronometer = () => {
    interval = setInterval(() => {
      seconds++;
      //console.log(seconds);
    }, 100);
  }

  const stopCronometer = () => {
    clearInterval(interval);
    const _seconds = seconds;
    seconds = 0;
    return _seconds
  }


  const handlePressIn = () => {
    startCronometer();
    //console.log('press in');
  }

  const handlePressOut = () => {
    const _seconds = stopCronometer();
    //console.log('press out', _seconds);

    //navigate to configuration screen if seconds is greater than 20
    if (_seconds >= timeToLoadConfig) {
      navigation.navigate('Configuration');
    } else if (_seconds >= timeToShare) {
      navigation.navigate('ShareCard', {card: card});
    }
  }

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} style={styles.container}>
      <View style={styles.container}>
          
          <Text style={styles.mainTitles}>Home Screen</Text>
          
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26d36',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainTitles: {
    color: '#fff',
    fontSize: 36,
  },
  btn1: {
    backgroundColor: '#fff',
    color: '#f26d36',
    border: 'solid 1px #fff',
  }
});

export default HomeScreen;