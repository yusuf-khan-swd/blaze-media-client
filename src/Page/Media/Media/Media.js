import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import PostCard from '../../Shared/PostCard/PostCard';

const Media = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    }
  });

  if (isLoading) {
    return <Loading></Loading>
  }

  if (!posts.length) {
    return <div className="m-2 h-[vh-50]">
      <h2 className="font-semibold text-center">No post available</h2>
    </div>
  }

  return (
    <div className="container mx-auto">
      <div className="m-2">
        <div className="grid grid-cols-1">
          {
            posts.map(post => <PostCard key={post._id} post={post}></PostCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Media;