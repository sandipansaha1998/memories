import React, { useState, useEffect } from "react";
import { TextField, Paper } from "@mui/material";
import Filebase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";
import { createPost, updatePost } from "../actions/posts";
import "../styles/Form.css";
import { notify } from "./Notification";

const Form = ({ show, setShow, currentId, setCurrentId }) => {
  // Checks if the Form is to Update or Create
  const postToBeUpdated = useSelector((state) => {
    return currentId ? state.posts.find((p) => p._id === currentId) : null;
  });
  // hook for Form data
  const [postData, setpostData] = useState({
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // Sets Form Data to Post data to be updated
    if (postToBeUpdated) {
      setpostData(postToBeUpdated);
    }
  }, [postToBeUpdated]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      //Updates Post
      const message = dispatch(updatePost(currentId, postData));
      if (message) {
        notify().error(message);
      } else {
        notify().success("Updated");
      }
    } else {
      // Current id null ==> Post creation
      console.log("POSTDATA", postData);
      const message = dispatch(createPost(postData));
      if (message) {
        notify().error(message);
      } else {
        notify().success("Updated");
      }
    }
    // Hides the modal and resets the currentId to no more associate the form with updation of post withs particular id,
    // thereby letting the form create a new post
    setShow(!show);
    setCurrentId(null);
  };

  return (
    <Paper className="form-container p-3 ">
      <form
        autoComplete="off"
        className="d-flex flex-column gap-2"
        onSubmit={handleSubmit}
      >
        <h4 className="text-center">
          <span className=" ">
            {currentId ? `Edit ` : `Plant a Memory`}{" "}
            <LinkedCameraIcon fontSize="medium" />
          </span>
        </h4>
        {/* Title */}
        <TextField
          name="title"
          variant="standard"
          label="Title"
          className="col-12 mt-2"
          value={postData.title}
          onChange={(e) => {
            setpostData({ ...postData, title: e.target.value });
          }}
          required
        ></TextField>
        {/* Message */}
        <TextField
          name="message"
          variant="standard"
          label="Message"
          className="col-12 mt-2"
          value={postData.message}
          onChange={(e) => {
            setpostData({ ...postData, message: e.target.value });
          }}
          required
        ></TextField>
        {/* Tags */}
        <TextField
          name="tags"
          variant="standard"
          label="Tags"
          className="col-12 mt-2"
          value={postData.tags}
          onChange={(e) => {
            setpostData({ ...postData, tags: e.target.value });
          }}
          required
        ></TextField>
        {/* File */}
        <div className="mx-2 my-2">
          <Filebase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setpostData({ ...postData, selectedFile: base64.base64 })
            }
            required
          />
        </div>
        <input
          type="submit"
          className="btn btn-outline-primary p-2"
          value={currentId ? `Update ` : `Post`}
        />
      </form>
    </Paper>
  );
};
export default Form;
