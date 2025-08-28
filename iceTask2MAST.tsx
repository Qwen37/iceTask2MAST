import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Button, FlatList, StyleSheet } from 'react-native';

const ICE_Task_2: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    { key: '1', name: 'Item 1' },
    { key: '2', name: 'Item 2' },
    { key: '3', name: 'Item 3' },
  ];

  return (
    <View style={styles.container}>
      {/* TouchableOpacity */}
      <TouchableOpacity
        style={{ backgroundColor: '#2196F3', padding: 10, marginBottom: 10 }}
        onPress={() => alert('TouchableOpacity pressed!')}
      >
        <Text style={{ color: '#fff' }}>Press Me</Text>
      </TouchableOpacity>
      <Text>TouchableOpacity: A wrapper for making views respond to touches. Used for custom buttons.</Text>

      {/* Modal */}
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text>This is a Modal!</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <Text>Modal: Displays content above an enclosing view. Used for dialogs and popups.</Text>

      {/* Image */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 50, height: 50, marginVertical: 10 }}
      />
      <Text>Image: Used to display images from local or remote sources.</Text>

      {/* Button */}
      <Button title="Click Me" onPress={() => alert('Button pressed!')} />
      <Text>Button: A basic button component for triggering actions.</Text>

      {/* FlatList */}
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        style={{ marginVertical: 10 }}
      />
      <Text>FlatList: Efficiently renders lists of data. Used for scrollable lists.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  explain: {
    marginBottom: 15,
    fontSize: 13,
    color: '#333',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default ICE_Task_2;