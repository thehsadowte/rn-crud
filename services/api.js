import axios from 'axios';
axios.defaults.baseURL = 'https://yourtestapi.com/api/posts/';

export const getAllPosts = () => {
  return axios
    .get('')
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export const createPost = (postData) => {
  const postId = generateId(); // Generate a unique ID for the post

  const postWithId = { id: postId, ...postData }; // Include the generated ID in the post data

  return axios
    .post('/', postWithId)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

const generateId = () => {
  // Logic to generate a unique ID
  // You can use a library like uuid or generate a random string
  // Here's a simple example that generates a timestamp-based ID
  const timestamp = Date.now();
  return `post-${timestamp}`;
};

export const updatePost = (postId, postData) => {
  axios
    .put(`${postId}`, {
      title: postData.title,
      text: postData.text,
      image: postData.image,
      url: postData.url,
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = (postId) => {
  return axios
    .delete(`/${postId}`)
    .then((response) => {
      console.log('Post deleted');
      return response.data;
    })
    .catch((error) => {
      console.log(error.message);
      throw error;
    });
};
