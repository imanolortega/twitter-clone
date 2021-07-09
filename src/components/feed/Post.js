import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, timestamp },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>{displayName}</h3>{" "}
              <span>
                {verified && <VerifiedUserIcon className="post__badge" />}
              </span>
              <span className="post__userName">{username}</span>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && <img alt="twitter" src={image}></img>}
          <div className="post__footer">
            <ChatBubbleOutlineIcon />
            <RepeatIcon />
            <FavoriteBorderIcon />
            <PublishIcon />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
