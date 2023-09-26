import React, { useState } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Card from '../../shared/Card';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  const [articles, setArticles] = useState([
      { title: 'article 1', author: 'author 1', content: 'content 1', key: '1' },
      { title: 'article 2', author: 'author 2', content: 'content 2', key: '2' },
      { title: 'article 3', author: 'author 3', content: 'content 3', key: '3' },
      { title: 'article 4', author: 'author 4', content: 'content 4', key: '4' },
      { title: 'article 5', author: 'author 5', content: 'content 5', key: '5' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Card>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
              <Text style={styles.content}>{item.content}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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
