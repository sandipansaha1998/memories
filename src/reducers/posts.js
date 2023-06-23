const posts = (posts = null, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [action.payload, ...posts];
    case "UPDATE":
      return posts.map((post) => {
        if (post._id === action.payload.id) return action.payload.data;
        return post;
      });
    case "DELETE":
      const postsNow = posts.filter((post) => {
        if (post._id !== action.payload.id) {
          return true;
        }
        return false;
      });
      return postsNow;
    default:
      return posts;
  }
};
export default posts;
