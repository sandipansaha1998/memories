import * as api from "../api";

export const login = (formData) => async (dispatch) => {
  const response = await api.login(formData);
  if (!response.success) {
    return response.message;
  }
  dispatch({ type: "AUTH", data: response.data });
};

export const logout = () => async (dispatch) => {
  dispatch({ type: "LOGOUT" });
};

export const setAuth = (authFromLocalStorage) => async (dispatch) => {
  dispatch({ type: "SETAUTH", data: authFromLocalStorage });
};
