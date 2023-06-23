import { useSelector } from "react-redux";
import "../styles/Posts.css";
import Post from "./Post";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Posts = ({ setCurrentId, setShow, show, isMyFeed }) => {
  let posts = useSelector((state) => {
    return state.posts;
  });
  const userId = useSelector((state) => {
    return state.auth?.user.id;
  });

  const [homePosts, setHomePosts] = useState(posts);
  console.log("POSTS -----> Update", posts);
  console.log("home POSTS -----> Update", homePosts);
  useEffect(() => {
    if (isMyFeed) {
      let filteredPosts = posts.filter((post) => {
        if (userId === post.creator._id) return true;
        return false;
      });
      setHomePosts(filteredPosts);
    } else {
      let filteredPosts = posts.filter((post) => {
        if (userId === post.creator._id) return false;
        return true;
      });
      setHomePosts(filteredPosts);
    }
  }, [isMyFeed, posts]);

  return (
    <div
      id="posts"
      className=" d-flex gap-4 flex-wrap justify-content-center   align-items-stretch container "
    >
      {console.log(homePosts)}
      {console.log("Posts Rendered")}
      {homePosts.map((post) => {
        return (
          <div className="post-container col-10 col-md-6 col-lg-6 mt-4">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <Post
                post={post}
                show={show}
                setShow={setShow}
                setCurrentId={setCurrentId}
              />
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
