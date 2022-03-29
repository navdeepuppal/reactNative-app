import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      
      <View style={styles.navigation}>
    
      <View style={{backgroundColor: "#aaa", height: 75, flex: 1, justifyContent: "center", alignItems: "center",}}><Image style={{width: 30, height: 30,}} source={require("./assets/favicon.png")}/></View>
      <View style={{backgroundColor: "#bbb", height: 75, flex: 1, justifyContent: "center", alignItems: "center",}}><Image style={{width: 30, height: 30,}} source={require("./assets/favicon.png")}/></View>
      <View style={{backgroundColor: "#ccc", height: 75, flex: 1, justifyContent: "center", alignItems: "center",}}><Image style={{width: 30, height: 30,}} source={require("./assets/favicon.png")}/></View>
      <View style={{backgroundColor: "#ddd", height: 75, flex: 1, justifyContent: "center", alignItems: "center",}}><Image style={{width: 30, height: 30,}} source={require("./assets/favicon.png")}/></View>
    </View>
      
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navigation: {
    flex: 1,
    flexDirection:"row",
    position: 'absolute',
    backgroundColor: '#999',
    justifyContent: "space-evenly",
    bottom: 0,
    alignItems: "flex-end",
  },
});
