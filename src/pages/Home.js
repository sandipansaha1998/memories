import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Spinner } from "react-bootstrap";
import Switch from "../components/Switch";
import { LandingPage } from "../components/LandingPage";
import Posts from "../components/Posts";

const Home = ({ show, setShow, currentId, setCurrentId }) => {
  // posts hook
  const [posts, setPosts] = useState(null);
  const postsData = useSelector((state) => {
    return state.posts;
  });
  const auth = useSelector((state) => {
    return state.auth;
  });
  const [isMyFeed, setIsMyFeed] = useState(false);
  const handleFeedToggle = () => {
    setIsMyFeed(!isMyFeed);
  };
  useEffect(() => {
    setPosts(postsData);
  }, [postsData]);

  if (!posts)
    return (
      <div
        style={{ height: "50vh" }}
        className="container d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" role="status"></Spinner>
      </div>
    );
  return (
    <div style={{ zIndex: 1 }} className="home">
      {posts.length === 0 ? (
        <LandingPage />
      ) : (
        <div>
          {auth && (
            <div className="position-md-absolute toggleSwitch container-sm text-center   ">
              <span onClick={handleFeedToggle}></span>
              <Switch isMyFeed={isMyFeed} setIsMyFeed={setIsMyFeed} />
            </div>
          )}

          <div className="d-flex">
            {" "}
            <Posts
              show={show}
              setShow={setShow}
              currentId={currentId}
              setCurrentId={setCurrentId}
              isMyFeed={isMyFeed}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
