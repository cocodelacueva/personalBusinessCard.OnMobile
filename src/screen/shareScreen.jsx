import { Pressable, StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ShareScreen = ({route, navigation}) => {
    const { card } = route.params;
    return (
        <View style={styles.container}>
            <Text>Share this card: {card}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26d36',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShareScreen;