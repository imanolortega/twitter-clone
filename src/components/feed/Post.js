import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { db } from "../../firebase";

import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Post = forwardRef(
  (
    { displayName, username, verified, text, image, avatar, id, user, time },
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
              <div className="post__headerTextLeft">
                <h3>{displayName}</h3>{" "}
                <span className="post__badgeContainer">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                </span>
                <span className="post__userName">{username + " · "}</span>
                <span className="post__tweetDate">
                  {" "}
                  &nbsp;
                  {new Date(time?.toDate()).toLocaleString()}
                </span>
              </div>
              <div className="post__headerTextRight">
                {user.email === username ? (
                  <DeleteForeverIcon
                    onClick={(e) => db.collection("posts").doc(id).delete()}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {image && (
            <img
              className="post__imageUpload"
              alt="twitter-post-img"
              src={image}></img>
          )}
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
