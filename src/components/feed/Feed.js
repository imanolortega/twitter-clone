import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";

import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { db } from "./../../firebase";
import FlipMove from "react-flip-move";

const Feed = ({ user }) => {
  const [posts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div className="feed">
      <div className="feed__header">
        <h1>Inicio</h1>
      </div>
      <TweetBox user={user} />
      <FlipMove>
        {posts?.docs.map((post) => (
          <Post
            id={post.id}
            user={user}
            key={post.id}
            displayName={post.data().displayName}
            username={post.data().username}
            verified={post.data().verified}
            text={post.data().text}
            image={post.data().postImg}
            avatar={post.data().avatar}
            time={post.data().timestamp}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
