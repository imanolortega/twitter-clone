import React, { useState } from "react";
import "./TweetBox.css";
import { db } from "./../../firebase";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";

const TweetBox = ({ user }) => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar: `${user.photo}`,
      displayName: `${user.name}`,
      image: tweetImage,
      text: tweetMessage,
      username: `${user.email}`,
      verified: "true",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photo} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            placeholder="¿Qué está pasando?"
            value={tweetMessage}
          />
        </div>
      </form>
      <div className="tweetBox__buttons">
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__inputImage"
          placeholder="Ingresa la URL de la imagen"
        />
        <button onClick={sendTweet} className="tweetBox__button">
          Twittear
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
