import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitles}>Hello World!</Text>
      <Text style={styles.paragraph}>Welcome to my App.</Text>
      <StatusBar style="auto" />
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

  paragraph: {
    color: '#fff',
    fontSize: 18,
  }
});
