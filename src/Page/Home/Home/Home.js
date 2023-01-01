import React from 'react';
import AddAPost from '../AddAPost/AddAPost';
import TopPost from '../TopPost/TopPost';

const Home = () => {
  return (
    <div className="container mx-auto">
      <AddAPost></AddAPost>
      <TopPost></TopPost>
    </div>
  );
};

export default Home;