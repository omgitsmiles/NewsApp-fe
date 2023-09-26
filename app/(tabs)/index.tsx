import { StyleSheet } from 'react-native';
import Card from '../../shared/Card';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card>
      <Text style={styles.title}>Article Name</Text>
      <Text style={styles.author}>Author Name</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.content}>Article Content</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 15,
    fontWeight: 'normal',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  content: {
    fontSize: 15,
    fontWeight: 'normal',
    alignItems: 'center',
    marginHorizontal: 50,
  }
});
