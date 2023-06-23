import axios from "axios";

const API = axios.create({
  baseURL: "https://memoriesapi.socialise-india.in/",
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    let token = JSON.parse(localStorage.getItem("profile")).token;
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
const customFetch = async function (method, url, data) {
  try {
    let response;

    if (method === "GET") {
      response = await API.get(url);
    } else if (method === "POST") {
      response = await API.post(url, data);
    } else if (method === "PATCH") {
      response = await API.patch(url, data);
    } else if (method === "DELETE") {
      response = await API.delete(url, data);
    } else {
      throw new Error("Invalid HTTP codes");
    }
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
    if (e.response) {
      return {
        success: false,
        message: e.response.data.message,
      };
    } else {
      return {
        success: false,
        message: e.message,
      };
    }
  }
};

export const fetchPosts = async () => {
  const response = await customFetch("GET", `/posts`);
  return response;
};
export const createPost = async (newPost) => {
  const response = await customFetch("POST", "/posts/create", newPost);
  return response;
};

export const updatePost = async (postId, updatedPost) => {
  const response = await customFetch("PATCH", `/posts/${postId}`, updatedPost);
  return response;
};
export const deletePost = async (postId) => {
  const posts = await API.delete(`/posts/${postId}`);
  return posts.data;
};

export const toggleLikePost = async (postId) => {
  const response = await customFetch("POST", `/posts/toggle-like/${postId}`);
  return response;
};

export const login = async (formData) => {
  const response = await customFetch("POST", "/user/login", formData);
  return response;
};
export const signup = async (formData) => {
  const response = await customFetch("POST", "/user/signup", formData);
  return response;
};
