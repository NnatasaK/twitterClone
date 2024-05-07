import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import SearchField from "../RightSide/SearchField";
import Feed from "../Feed/Feed";
import Tweetbox from './Tweetbox.jsx';
import GetAllPosts from './GetAllPosts.jsx';
import HomePage from './components/home/HomePage.jsx'
import "./HomePage.css";

/* import Feed from '../Feed/Feed' */

function HomePage() {
  return (
    <section className="home-page">
      <Sidebar />
      <Feed />
      <SearchField />
      <Tweetbox />
      <GetAllPosts />
      <
    </section>
  );
}

export default HomePage;
