import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { RegistartionScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <ImageBackground source={require("./src/png/Photo_BG.jpg")}>
        <Text>First React-Native Homework!</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
