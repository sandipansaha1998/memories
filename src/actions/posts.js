import * as api from "../api";

// Action Creators

export const getPosts = () => async (dispatch) => {
  try {
    const data = await api.fetchPosts();
    console.log("response", data);
    dispatch({ type: "FETCH_ALL", payload: data });
    // dispatch({ type: "FETCH_ALL", payload: ["test"] });
  } catch (e) {
    console.error(e.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.createPost(post);
    console.log("Response From API", data);
    dispatch({
      type: "CREATE",
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};
