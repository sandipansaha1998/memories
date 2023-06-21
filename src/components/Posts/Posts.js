import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import Post from "./Post/Post";
const Posts = ({ setCurrentId, setShow, show }) => {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <div className=" d-flex gap-4 flex-wrap justify-content-center   align-items-stretch container">
      {posts.map((post) => {
        return (
          <div className="post-container col-10 col-md-6 col-lg-6">
            <Post
              post={post}
              show={show}
              setShow={setShow}
              setCurrentId={setCurrentId}
            />
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
