import { StyleSheet, Text, View, Button } from 'react-native';


const ValidationScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f26d36',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ValidationScreen;