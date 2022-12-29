import React from 'react';
import AddAPost from '../AddAPost/AddAPost';
import TopPost from '../TopPost/TopPost';

const Home = () => {
  return (
    <div className="container mx-auto">
      <h2>Home Page</h2>
      <AddAPost></AddAPost>
      <TopPost></TopPost>
    </div>
  );
};

export default Home;