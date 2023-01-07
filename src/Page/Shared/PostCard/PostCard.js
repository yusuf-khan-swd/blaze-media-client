import React, { useState } from 'react';
import { FaRegCommentAlt, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';

const PostCard = ({ post }) => {
  const { postImgUrl, postBody, likes } = post;

  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likes)


  const handleLiked = () => {
    setLiked(!liked);
    const currentLike = !liked ? 1 : -1;
    setTotalLikes(totalLikes + currentLike);
  };

  return (
    <div className="mx-auto m-2 sm:w-[550px]">
      <div className="card card-compact shadow-lg rounded-lg">
        {
          postImgUrl &&
          <figure className="h-72 w-full bg-white"><img src={postImgUrl} alt="Post" /></figure>
        }
        <div className="card-body">
          <p>{postBody}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-ghost" onClick={handleLiked} title={liked ? 'Unlike' : 'Like'}>
              {
                liked ?
                  <FaThumbsUp className="text-2xl"></FaThumbsUp>
                  :
                  <FaRegThumbsUp className="text-2xl"></FaRegThumbsUp>
              }
            </button>
            <button className="btn btn-ghost">
              <FaRegCommentAlt className="text-2xl"></FaRegCommentAlt>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;