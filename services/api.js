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
  return axios
    .post('', {
      title: postData.title,
      text: postData.text,
      image: postData.image,
      url: postData.url,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const updatePost = () => {
  axios
    .put(`${postId}`, {
      title: 'Оновлений заголовок',
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const deletePost = (postId) => {
  axios
    .delete(`${postId}`)
    .then((response) => {
      console.log('Пост видалено');
    })
    .catch((error) => {
      console.log(error);
    });
};
