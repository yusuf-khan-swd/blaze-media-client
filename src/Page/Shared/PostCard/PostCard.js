import React, { useContext, useState } from 'react';
import { FaRegCommentAlt, FaRegThumbsUp, FaThumbsUp } from 'react-icons/fa';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const PostCard = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { postImgUrl, postBody, likes } = post;

  const [liked, setLiked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likes)


  const handleLiked = () => {
    setLiked(!liked);
    const currentLike = !liked ? 1 : -1;
    setTotalLikes(totalLikes + currentLike);

    const updatedLikes = totalLikes + currentLike;
    const userLiked = !liked;
    const userId = user.email;

    console.log({ updatedLikes, userLiked, userId });
  };

  return (
    <div className="mx-auto sm:w-[550px] w-[350px]">
      <div className="card card-compact shadow-lg rounded-lg border">
        {
          postImgUrl &&
          <figure className="h-72 w-full bg-white"><img src={postImgUrl} alt="Post" /></figure>
        }
        <div className="card-body">
          <p>{postBody}</p>
          <div className="card-actions justify-between">
            <div className="flex justify-center items-center">
              <button className="btn btn-ghost" onClick={handleLiked} title={liked ? 'Unlike' : 'Like'}>
                {
                  liked ?
                    <FaThumbsUp className="text-2xl"></FaThumbsUp>
                    :
                    <FaRegThumbsUp className="text-2xl"></FaRegThumbsUp>
                }
              </button>
              <button className="font-semibold text-xl pl-3">
                {
                  totalLikes
                }
              </button>
            </div>
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