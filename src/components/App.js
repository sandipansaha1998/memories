import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../styles/App.css";
import { getPosts } from "../actions/posts";
import { Navbar } from "./Navbar";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { LandingPage } from "./LandingPage";
export const App = () => {
  const dispatch = useDispatch();
  // hook for modal visibility
  const [show, setShow] = useState(false);
  // hook for updating or deleting post
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App ">
      <ToastContainer />
      <Navbar
        show={show}
        setShow={setShow}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <Routes>
        {/* Home */}
        <Route exact path="/" element={<LandingPage />}></Route>
        {/* Feed */}
        <Route
          exact
          path="/feed"
          element={
            <Home
              show={show}
              setShow={setShow}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          }
        ></Route>
        {/* Wall */}

        {/* Sign up and login */}
        <Route exact path="/auth" element={<Auth />}></Route>
      </Routes>
    </div>
  );
};

export default App;
