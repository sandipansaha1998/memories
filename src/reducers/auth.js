const auth = (state = null, action) => {
  switch (action.type) {
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { token: action?.data.token, user: action?.data.user };
    case "SETAUTH":
      const data = JSON.parse(localStorage.getItem("profile"));
      return data;
    case "LOGOUT":
      localStorage.removeItem("profile");
      return null;
    default:
      return state;
  }
};
export default auth;
