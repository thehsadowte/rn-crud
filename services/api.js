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
    .delete(`${postId}`)
    .then((response) => {
      console.log(`Post ${postId} deleted successfully`);
      return response.data;
    })
    .catch((error) => {
      console.log(`something went wrong`);
      throw error;
    });
};

export async function getPostById(postId) {
  try {
    const response = await axios.get(`${postId}`);
    console.log(`succesfully retrieved post ${postId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch post');
  }
}
