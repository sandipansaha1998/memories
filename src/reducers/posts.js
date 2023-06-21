const posts = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log(action.payload);
      return [...posts, action.payload];
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
      console.log("Reduced  to :", postsNow);
      return postsNow;
    default:
      return posts;
  }
};
export default posts;
