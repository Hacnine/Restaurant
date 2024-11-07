import React from 'react';
import Hero from '../Clients/Hero';
import FeaturedArticles from './FeaturedArticles';
import RecentPosts from './RecentPosts';
import Categories from './Categories';
import Subscription from './Subscription';



const Blog = () => {
  return (
    <div className="px-4 py-8 wrapper">
      <Hero />
      <FeaturedArticles />
      <RecentPosts />
      <Categories />
      <Subscription />
    </div>
  );
};

export default Blog;
