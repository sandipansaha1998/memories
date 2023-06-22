import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
//
import { LandingPage } from "../components/LandingPage";
import Posts from "../components/Posts/Posts";
const Home = ({ show, setShow, currentId, setCurrentId }) => {
  const postsData = useSelector((state) => {
    return state.posts;
  });
  console.log(postsData);
  const [posts, setPosts] = useState(postsData);
  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);
  if (!posts)
    return (
      <div
        style={{ height: "30vh" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  return (
    <div>
      {console.log(posts)}{" "}
      <appcontainer className="container-fluid m-2 ">
        {posts.length === 0 ? (
          <LandingPage />
        ) : (
          <div>
            <div className="d-flex">
              {" "}
              <Posts
                show={show}
                setShow={setShow}
                currentId={currentId}
                setCurrentId={setCurrentId}
              />
            </div>
          </div>
        )}
      </appcontainer>
    </div>
  );
};

export default Home;
