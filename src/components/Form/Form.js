import React, { useState } from "react";
import { TextField, Paper } from "@mui/material";
import Filebase from "react-file-base64";
import { useDispatch } from "react-redux";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import { createPost } from "../../actions/posts";
import "./style.css";
import { notify } from "../Notification";
const Form = ({ show, setShow }) => {
  const [postData, setpostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    notify().success("Photo Uploaded");
    dispatch(createPost(postData));
    setShow(!show);
  };

  return (
    <Paper className="form-container p-3 ">
      <form
        autoComplete="off"
        noValidate
        className="d-flex flex-column gap-2"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center">
          <span className=" ">
            Plant a Memory <LinkedCameraIcon fontSize="medium" />
          </span>
        </h4>
        <TextField
          name="creator"
          variant="standard"
          label="Creator"
          className="container-fluid"
          value={postData.creator}
          onChange={(e) => {
            setpostData({ ...postData, creator: e.target.value });
          }}
        ></TextField>

        <TextField
          name="title"
          variant="standard"
          label="Title"
          className="col-12 mt-2"
          value={postData.title}
          onChange={(e) => {
            setpostData({ ...postData, title: e.target.value });
          }}
        ></TextField>

        <TextField
          name="message"
          variant="standard"
          label="Message"
          className="col-12 mt-2"
          value={postData.message}
          onChange={(e) => {
            setpostData({ ...postData, message: e.target.value });
          }}
        ></TextField>

        <TextField
          name="tags"
          variant="standard"
          label="Tags"
          className="col-12 mt-2"
          value={postData.tags}
          onChange={(e) => {
            setpostData({ ...postData, tags: e.target.value });
          }}
        ></TextField>
        <div className="mx-2 my-2">
          <Filebase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setpostData({ ...postData, selectedFile: base64.base64 })
            }
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary p-2"
          value="Create"
        />
      </form>
    </Paper>
  );
};
export default Form;
