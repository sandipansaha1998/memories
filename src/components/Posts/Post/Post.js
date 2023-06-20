import React from "react";
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
import moment from "moment";

import "./style.css";
const Post = ({ post }) => {
  console.log(post);
  return (
    <Card className="post-card">
      <div className="overlay">
        <Typography className="word-wrap" variant="h8">
          {" "}
          {moment(post.createdAt).fromNow()}
        </Typography>
        <Typography variant="body2">{post.creator}</Typography>
      </div>
      <CardMedia
        className="media px-2"
        component="img"
        image={post.selectedFile}
        title={post.title}
      />

      <div className="overlay2">
        <Button style={{ color: "black" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary" component="h2">
          {/* {post.tags.map((tag) => `#${tag} `)} */}
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
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpOffAltIcon className="me-2" fontSize="small" />{" "}
          {post.likeCount}{" "}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
