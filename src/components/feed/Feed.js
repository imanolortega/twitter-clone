import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./../../firebase";
import FlipMove from "react-flip-move";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  //console.log(posts);

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Inicio</h1>
      </div>
      <TweetBox />
      <FlipMove>
        {posts &&
          posts.map((post) => {
            return (
              <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
              />
            );
          })}
      </FlipMove>
    </div>
  );
};

export default Feed;
