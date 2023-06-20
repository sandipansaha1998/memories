import axios from "axios";

const url = "http://localhost:8000";

export const fetchPosts = async () => {
  const posts = await axios.get(`${url}/posts`);
  return posts.data.data;
};
export const createPost = async (newPost) => {
  const posts = await axios.post(`${url}/posts/create`, newPost);
  // console.log(posts.data);
  return posts.data;
};
