import React from 'react';

const PostCard = ({ post }) => {
  console.log(post);

  const { postImgUrl, postBody } = post;
  return (
    <div className="mx-auto m-2 sm:w-[550px]">
      <div className="card card-compact shadow-lg rounded-lg">
        {
          postImgUrl &&
          <figure className="h-72 w-full bg-white"><img src={postImgUrl} alt="Post" /></figure>
        }
        <div className="card-body">
          <p>{postBody}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary capitalize">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;