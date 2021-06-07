import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>Tino Burgos</h3>{" "}
            <span>
              <VerifiedUserIcon className="post__badge" />
            </span>
            <span className="post__userName">@tinoburgos</span>
          </div>
          <div className="post__headerDescription">
            <p>Construyendo un clon de Twitter</p>
          </div>
        </div>
        <img
          alt="twitter"
          src="https://i.pinimg.com/originals/b3/ba/52/b3ba523fe95c98662fc6b88643ce61fa.jpg"></img>
        <div className="post__footer">
          <ChatBubbleOutlineIcon />
          <RepeatIcon />
          <FavoriteBorderIcon />
          <PublishIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;
