import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";

import memories from "../images/memories.png";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import "./style.css";
import { getPosts } from "../actions/posts";
import { LandingPage } from "./LandingPage";
export const App = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const [currentId, setCurrentId] = useState(null);

  const posts = useSelector((state) => {
    return state.posts;
  });
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const handleClose = () => {
    setShow(false);
    setCurrentId(null);
  };
  const handleShow = () => setShow(true);
  return (
    <div className="App container-fluid">
      <nav
        className="appBar d-flex justify-content-around"
        position="static"
        color="inherit"
      >
        <img className="app-image " src={memories} alt="memories" height="60" />
        <div
          className=" p-2 rounded-pill ms-auto"
          variant="primary"
          onClick={handleShow}
        >
          <IconButton
            className="icon-button"
            color="secondary"
            aria-label="Upload"
          >
            <AddAPhotoIcon fontSize="large" />
          </IconButton>
        </div>
      </nav>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form
            show={show}
            setShow={setShow}
            currentId={currentId}
            setCurrentId={setCurrentId}
          />
        </Modal.Body>
      </Modal>
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

export default App;
