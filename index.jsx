import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Kamo congratulation </Text>
      <StatusBar style="auto" />
      <Link href="/Profile" style={{color: 'lime green'}}> Go to Profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4e7eaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
