import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import {useState} from 'react';

//hook
import { isLandscape } from '../hooks/useOrientation';

import PersonalCard from '../components/personalCard';

const cards = [
  {
      theme: 'minimal',
      name: 'coco',
      url: 'https://agencia.portinos.com',
      image: require('../../assets/perfil.jpg'),
      role: 'Engineering Manager SSR',
      email: 'coco@portinos.com.ar',
  },
  {
      theme: 'business',
      name: 'Jorge Pablo Dieguez',
      url: 'https://agencia.portinos.com',
      image: require('../../assets/perfil.jpg'),
      role: 'Engineering Manager SSR',
      email: 'coco@portinos.com.ar',
      mobile: '+54 9 11 5507 1727',
      location: 'Buenos Aires, Argentina',
  },
]

const HomeScreen = ({navigation}) => {
  
  const {orientation, wid, hei} = isLandscape();
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
        <PersonalCard
        width={wid}
        height={hei}
        landscape={orientation}
        card={cards[0]}
         />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexShrink: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#f26d36',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;