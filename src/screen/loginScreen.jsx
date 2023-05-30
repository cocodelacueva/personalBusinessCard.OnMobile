import { StyleSheet, Text, View } from 'react-native';

//commponentes
import LoginButton from '../components/loginButton';

const LoginScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitles}>Iniciar sesión</Text>
      <LoginButton navigation={navigation} />
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
      marginVertical: 40,
      fontSize: 36,
      color: '#fff',
    }
});

export default LoginScreen;