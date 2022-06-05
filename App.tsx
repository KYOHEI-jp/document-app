import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

export default CatApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
