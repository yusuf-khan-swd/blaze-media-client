import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../Shared/Loaders/Loader';
import PostCard from '../../Shared/PostCard/PostCard';

const Media = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://blaze-media-server.vercel.app/posts");
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loader></Loader>
  }

  if (!posts.length) {
    return <div className="m-2 h-[80vh]">
      <h2 className="font-semibold text-center">No post available</h2>
    </div>
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-y-6">
        {
          posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
        }
      </div>
    </div>
  );
};

export default Media;