import React from "react";
import { toast } from "react-hot-toast";
import "./AddAPost.css";

const AddAPost = () => {

  const handlePost = (event) => {
    event.preventDefault();

    const postImage = document.getElementById("postImage").innerHTML;
    const postBody = document.getElementById("postBody").innerText;
    const str = postBody.replace(/\s\s+/g, " ");

    if (str.length < 1) {
      return toast.error("Please type what you are thinking");
    }

    document.getElementById("postBody").innerHTML = "";
    console.log({ str, postImage });
  };

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
        <form onSubmit={handlePost}>
          <div className="card flex-shrink-0 max-w-lg mx-auto">
            <div className="card-body">
              <div className="form-control">
                <div
                  data-text={`What's happening?`}
                  id="postBody"
                  placeholder={`What's happening?`}
                  className="textarea textarea-bordered min-h-[150px]"
                  contentEditable
                ></div>
              </div>
              <div className="form-control">
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  id="postImage"
                />
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  className=" btn btn-primary capitalize text-xl h-10"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAPost;
