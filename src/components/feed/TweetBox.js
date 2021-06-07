import React from "react";
import "./TweetBox.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";

const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="¿Qué está pasando?" />
        </div>
      </form>
      <div className="tweetBox__buttons">
        <PhotoIcon className="tweetBox__icon" />
        <button className="tweetBox__button">Twittear</button>
      </div>
    </div>
  );
};

export default TweetBox;
