import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const EditPostScreen = () => {
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
          placeholder="Image url"
          value={image}
          onChangeText={setImage}
        />
        <TextInput
          style={styles.textInput}
          placeholder="url"
          value={url}
          onChangeText={setUrl}
        />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={handleCreatePost}>
          <Text style={styles.btnCreate}>Create New Post</Text>
        </TouchableOpacity>

        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{image}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;

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
  btnCreate: {
    color: 'white',
    fontSize: 16,
  },
});
