import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import moment from 'moment';

const Post = ({ image, title, text, created_at, url }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {text}
        </Text>

        <View style={styles.data}>
          {/* <Text style={styles.author} numberOfLines={2}>
            {url}
          </Text> */}
          <Text style={styles.date}>
            {moment(created_at).format('MMMM Do YYYY')}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    width: '98%',
    marginBottom: 20,

    backgroundColor: '#fff',
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
  },
  imageContainer: {
    width: '90%',
    aspectRatio: 16 / 9,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  date: {
    fontWeight: '700',
    color: 'red',
    fontSize: 14,
  },
  source: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
  sourceContainer: {
    marginTop: 10,
  },
});
