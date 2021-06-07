import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      {/*Header*/}
      <div className="feed__header">
        <h1>Inicio</h1>
      </div>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      {/*Tweets*/}
    </div>
  );
};

export default Feed;
