import axios from "axios";

const url = "http://localhost:8000";

export const fetchPosts = async () => {
  const posts = await axios.get(`${url}/posts`);
  return posts.data;
};
export const createPost = async (newPost) => {
  const posts = await axios.post(`${url}/posts/create`, newPost);
  // console.log(posts.data);
  return posts.data;
};

export const updatePost = async (postId, updatedPost) => {
  const posts = await axios.patch(`${url}/posts/${postId}`, updatedPost);
  // console.log(posts.data);
  return posts.data;
};
