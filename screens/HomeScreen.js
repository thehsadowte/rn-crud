import { FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

import Post from '../components/Post';
import { getAllPosts, createPost } from '../services/api';
import Loader from '../components/Loader';

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [creatingPost, setCreatingPost] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    setLoading(true);
    getAllPosts()
      .then((fetchedPosts) => {
        setPosts(fetchedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const renderItem = React.useCallback(({ item }) => {
    return (
      <Post
        title={item.title}
        text={item.text}
        image={item.image}
        created_at={item.created_at}
      />
    );
  }, []);

  const keyExtractor = React.useCallback((item) => {
    return `${item.id}-${item.someUniqueProperty}`;
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Створити пост"
        onPress={() => navigation.navigate('CreatePost')}
      />
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '95%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 220,
  },
});
