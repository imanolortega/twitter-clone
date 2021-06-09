import React, { useState } from "react";
import "./TweetBox.css";
import db from "./../../firebase";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  console.log(tweetMessage);

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GhSgox9LcmhLHwi33Wos7ReukV0fdSiJOTU1yxJeQ=s96-c",
      displayName: "Imanol Ortega",
      image: tweetImage,
      text: tweetMessage,
      username: "imanolrtega",
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
          <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GhSgox9LcmhLHwi33Wos7ReukV0fdSiJOTU1yxJeQ=s96-c" />
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
