import * as api from "../api";

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.fetchPosts();
    if (!response.success) {
      return response.message;
    }
    dispatch({ type: "FETCH_ALL", payload: response.data.posts });
  } catch (e) {
    console.error(e.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  const response = await api.createPost(post);
  if (!response.success) {
    return response.message;
  }
  dispatch({
    type: "CREATE",
    payload: response.data.postCreated,
  });
};

export const toggleLikePost = (post) => async (dispatch) => {
  const response = await api.toggleLikePost(post);

  if (!response.success) {
    return response.message;
  }

  let id = response.data.post._id;
  dispatch({
    type: "UPDATE",
    payload: { data: response.data.post, id },
  });
};

export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const response = await api.updatePost(id, updatedPost);
    if (!response.success) {
      return response.message;
    }
    dispatch({
      type: "UPDATE",
      payload: { data: response.data.updatedPost, id },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({
      type: "DELETE",
      payload: { id },
    });
  } catch (error) {
    console.error(error.message);
  }
};
