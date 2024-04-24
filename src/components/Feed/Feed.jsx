import React, { useState, useEffect } from "react";
/* import TweetBox from "./TweetBox"; */
import "./Feed.css";
import { FiSettings } from "react-icons/fi";
import FlipMove from "react-flip-move";
import Post from "./Post";
import CreatePost from "./CreatePost";


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/feed/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
            })
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div className="feed">
            <div className="feed-header">
                <div className="left-header">
                    <h3>For you</h3>
                </div>
                <div className="right-header">
                    <h3>Following</h3>
                </div>
                <div className="settings">
                    {<FiSettings className="settings-icon" />}
                </div>
            </div>
            <div className="create-post-container">
                <CreatePost />
            </div>
            <h1>Feed</h1>
            <div>
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </div>
    )
}

export default Feed

// Notes:  Change code according to created posts from other users (our own db)
// code that depends on our data is after posts.map (fix)
// Alternative:
/* {posts.map(post => (
    <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>Author: {post.author}</p>
    </div>
))} */   // a simple all posts display
// create api endpoint that useEffect leads to
// decide if using TweetBox - might be unnecessary but nice to learn anyway
// good luck with adding styles :(((  
