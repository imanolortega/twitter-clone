import React, { useState, useRef } from "react";
import "./TweetBox.css";
import { db, storage } from "./../../firebase";
import firebase from "firebase";

import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const TweetBox = ({ user }) => {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendTweet = (e) => {
    e.preventDefault();
    if (!inputRef.current.value && !imageToPost) return; //does nothing;
    db.collection("posts")
      .add({
        avatar: `${user.photo}`,
        displayName: `${user.name}`,
        text: inputRef.current.value,
        username: `${user.email}`,
        verified: "true",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage()
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              storage()
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImg: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photo} />
          <input
            ref={inputRef}
            placeholder={`¿Qué está pasando ${user.name}?`}
          />
        </div>
      </form>
      <div className="tweetBox__buttons">
        <div className="tweetBox__imageGroup">
          <div
            className="tweetBox__image"
            onClick={() => filePickerRef.current.click()}>
            <PhotoIcon />
            <input
              onChange={addImageToPost}
              ref={filePickerRef}
              type="file"
              hidden
            />
          </div>

          {imageToPost && (
            <div onClick={removeImage} style={{ display: "flex" }}>
              <img
                className="tweetBox__imageToPost"
                alt="img-to-post"
                src={imageToPost}
              />
              <HighlightOffIcon
                className="tweetBox__imageToPostIcon"
                style={{ color: "red" }}
                onClick={removeImage}
              />
            </div>
          )}
        </div>

        <button onClick={sendTweet} className="tweetBox__button">
          Twittear
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
