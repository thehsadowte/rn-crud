import React, { useEffect, useState } from 'react';
import {
  View,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Post from '../components/Post';
import { getAllPosts, deletePost } from '../services/api';
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

  const handleEditBtn = (postId) => {
    navigation.navigate('EditPostScreen', { postId: postId });
  };

  const handleDeletePost = (postId) => {
    setLoading(true);
    deletePost(postId)
      .then(() => {
        console.log(`Post ${postId} deleted successfully`);
        fetchPosts();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const renderItem = React.useCallback(
    ({ item }) => {
      return (
        <View>
          <Post
            title={item.title}
            text={item.text}
            image={item.image}
            created_at={item.created_at}
            onPress={() => handleEditBtn(item.id)}
            onDelete={() => handleDeletePost(item.id)}
          />
        </View>
      );
    },
    [handleEditBtn, fetchPosts]
  );

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
