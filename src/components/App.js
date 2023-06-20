import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { IconButton } from "@mui/material";

import memories from "../images/memories.png";
import Posts from "./Posts/Posts";
import Form from "./Form/Form";
import "./style.css";
import { getPosts } from "../actions/posts";
export const App = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const posts = useSelector((state) => {
    return state.posts;
  });
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
          <Form show={show} setShow={setShow} />
        </Modal.Body>
      </Modal>
      <appcontainer className="container-fluid m-2 ">
        {posts.length === 0 ? (
          <div className="col-10 col-md-9 col-lg-4 mx-auto"></div>
        ) : (
          <div>
            <div className="d-flex">
              {" "}
              <Posts />
            </div>
          </div>
        )}
      </appcontainer>
    </div>
  );
};

export default App;
