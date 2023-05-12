import { StyleSheet, Text, View, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({navigation}) => {

    const handleLogout = () => {
      //delete token and user from async storage
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('user');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitles}>Home Screen</Text>
            <Button
                style={styles.btn1}
                title="Logout"
                onPress={handleLogout}
                />
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