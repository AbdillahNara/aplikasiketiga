import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, ScrollView, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Item 1' },
    { id: '2', name: 'Item 2' },
    { id: '3', name: 'Item 3' },
    { id: '4', name: 'Item 4' },
    { id: '5', name: 'Item 5' },
  ]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>Welcome to React Native!</Text>
        
        <TextInput
          style={styles.textInput}
          placeholder="Type here"
          value={inputText}
          onChangeText={setInputText}
        />

        <Image
          style={styles.image}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />

        <Button
          title="Press me"
          onPress={() => alert('Button pressed!')}
        />

        <FlatList
          data={items}
          renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  view: {
    width: '100%',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '80%',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
