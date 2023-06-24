import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { updatePost } from '../services/api';

const EditPostScreen = () => {
  const route = useRoute();
  const { post } = route.params;
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [url, setUrl] = useState('');

  const handleEditPost = () => {
    updatePost(post.id, {
      title,
      text,
      image,
      url,
    });

    setTitle('');
    setText('');
    setImage('');
    setUrl('');

    navigation.navigate('Home');
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Post Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Post Description"
          value={text}
          onChangeText={setText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Image URL"
          value={image}
          onChangeText={setImage}
        />
        <TextInput
          style={styles.textInput}
          placeholder="URL"
          value={url}
          onChangeText={setUrl}
        />
        <TouchableOpacity style={styles.btnContainer} onPress={handleEditPost}>
          <Text style={styles.btnEdit}>Edit Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditPostScreen;

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  btnContainer: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  btnEdit: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
