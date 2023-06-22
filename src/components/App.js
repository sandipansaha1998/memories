import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

import "./style.css";
import { getPosts } from "../actions/posts";
import { Navbar } from "./Navbar/Navbar";
import Home from "../pages/Home";
import Auth from "../pages/Auth";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const App = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="App container-fluid">
      <ToastContainer />
      <Navbar
        show={show}
        setShow={setShow}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <Routes>
        {" "}
        <Route
          exact
          path="/"
          element={
            <Home
              show={show}
              setShow={setShow}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          }
        ></Route>
        <Route exact path="/auth" element={<Auth />}></Route>
      </Routes>
    </div>
  );
};

export default App;
