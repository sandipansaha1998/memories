import * as api from "../api";

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("response asd", data);
    dispatch({ type: "FETCH_ALL", payload: data });
    // dispatch({ type: "FETCH_ALL", payload: ["test"] });
  } catch (e) {
    console.error(e.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log("Response From API", data);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};
export const updatePost = (id, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatedPost);

    console.log("Response From API", data);

    dispatch({
      type: "UPDATE",
      payload: { data, id },
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    console.log("Action:", id);
    await api.deletePost(id);

    dispatch({
      type: "DELETE",
      payload: { id },
    });
  } catch (error) {
    console.error(error.message);
  }
};
