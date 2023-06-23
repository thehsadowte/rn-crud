import React, { useEffect, useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from '../components/Post';
import { getAllPosts } from '../services/api';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, [navigation]);

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

  //   handleEditBtn = () => {
  //     navigation.navigate('EditPostScreen');
  //   };

  const renderItem = React.useCallback(({ item }) => {
    return (
      <Post
        title={item.title}
        text={item.text}
        image={item.image}
        created_at={item.created_at}
        onPress={handleEditBtn}
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
