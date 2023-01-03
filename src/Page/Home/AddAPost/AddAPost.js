import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import "./AddAPost.css";

const AddAPost = () => {
  const { user } = useContext(AuthContext);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsDataLoading(true);

    const fileField = document.querySelector('input[type="file"]');

    const getPostBody = document.getElementById("postBody").innerText;
    const postBody = getPostBody.replace(/\s\s+/g, " ");

    if (postBody.length < 1) {
      setIsDataLoading(false);
      return toast.error("Please type what you are thinking");
    }

    handleAddPost(fileField, postBody);
    document.getElementById("postBody").innerHTML = "";
    document.getElementById("postImage").value = "";
  };

  const handleAddPost = async (fileField, postBody) => {
    setIsDataLoading(true);
    const formData = new FormData();
    formData.append('image', fileField.files[0]);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageHostingKey}`, {
        method: "POST",
        body: formData
      })

      const data = await res.json();
      if (data.status === 200) {
        const postImgUrl = data.data.url;

        const post = {
          postImgUrl, postBody, email: user?.email, name: user?.displayName, likes: 0, comment: 0
        }

        try {
          const postRes = await fetch('http://localhost:5000/posts', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(post)
          })

          const postData = await postRes.json();
          if (postData.acknowledged) {
            toast.success("Your post is added.");
            setIsDataLoading(false);
          }
          setIsDataLoading(false);

        } catch (error) {
          console.log("data posting error", error);
          setIsDataLoading(false);
        }

      }
      else {
        console.log("Image hosting problem", data);
        toast.error(data.error.message);
        setIsDataLoading(false);
      }

    } catch (error) {
      console.log("Image hosting error", error);
      setIsDataLoading(false);
    }
  };

  if (!user?.uid) {
    return <div className="m-2 h-[50vh]">
      <h2 className="font-semibold text-center">Please <Link className="text-blue-600" to={`/login`}>Login</Link> to add post.</h2>
    </div>
  }

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
        <form onSubmit={handleFormSubmit}>
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
                  id="postImage"
                  type="file"
                  accept="image/*"
                  className="file-input file-input-bordered w-full"
                  required
                  disabled={isDataLoading}
                />
              </div>
              <div className="form-control mt-3">
                <button
                  type="submit"
                  className=" btn btn-primary capitalize text-xl h-10"
                  disabled={isDataLoading}
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
