import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import moment from "moment";
import { Modal } from "react-bootstrap";
import { deletePost, toggleLikePost } from "../actions/posts";
import { notify } from "./Notification";

import "../styles/Post.css";

const Post = ({ post, setCurrentId, show, setShow }) => {
  // Hook for Visibilty of confirm delete modal
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Show and close handles
  const handleCloseDeleteModal = () => setShowDeleteModal(false);
  const handleShowDeleteModal = () => setShowDeleteModal(true);

  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  // Handles delete
  const handleDeleteButton = () => {
    notify().success("Post deleted");
    handleCloseDeleteModal();
    dispatch(deletePost(post._id));
  };
  // Handles Like
  const handleLike = () => {
    console.log(post);
    dispatch(toggleLikePost(post._id));
  };

  return (
    <Card className="post-card">
      <div className="overlay">
        <Typography className="word-wrap" variant="h8">
          {" "}
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Typography variant="body2">{post.creator.name}</Typography>
      </div>
      <CardMedia
        className="media px-2"
        component="img"
        image={post.selectedFile}
        title={post.title}
      />
      {/* edit button */}
      <div className="overlay2">
        {auth?.user.id === post.creator._id && (
          <Button
            style={{ color: "black" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
              setShow(!show);
            }}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        )}
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary" component="h2">
          {post.tags[0].split(" ").map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className="title" gutterBottom variant="h5" component="h2">
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        {post.likes.includes(auth?.user.id) ? (
          <Button onClick={handleLike}>
            <FavoriteIcon className="text-danger" />
          </Button>
        ) : (
          <Button
            size="small"
            onClick={
              auth
                ? handleLike
                : () => {
                    notify().error("Please login to engage");
                  }
            }
          >
            <FavoriteBorderIcon className="" />{" "}
          </Button>
        )}
        <span className="me-auto">{post.likes.length}</span>
        {auth?.user.id === post.creator._id && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              handleShowDeleteModal();
            }}
          >
            <DeleteIcon fontSize="small" />
          </Button>
        )}
      </CardActions>
      {/* Modal for confirm delete */}

      <Modal id="delete" show={showDeleteModal} onHide={handleCloseDeleteModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="text-center">
          Deleted posts cannot be deleted
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="contained"
            color="error"
            onClick={handleDeleteButton}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
};
export default Post;