import React, { useState } from "react";
import { toast } from "react-hot-toast";
import "./AddAPost.css";

const AddAPost = () => {
  const [isDataLoading, setIsDataLoading] = useState(false);

  const handlePost = (event) => {
    event.preventDefault();
    setIsDataLoading(true);

    const fileField = document.querySelector('input[type="file"]');

    const postBody = document.getElementById("postBody").innerText;
    const str = postBody.replace(/\s\s+/g, " ");

    if (str.length < 1) {
      setIsDataLoading(false);
      return toast.error("Please type what you are thinking");
    }

    handleImageUpload(fileField);
    // document.getElementById("postBody").innerHTML = "";
    // document.getElementById("postImage").value = "";
  };

  const handleImageUpload = fileField => {
    setIsDataLoading(true);
    const formData = new FormData();
    formData.append('image', fileField.files[0]);
    console.log(formData);

    fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_ImageHostingKey}`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 200) {
          toast.success("Image uploaded");
          console.log(data);
          setIsDataLoading(false);
        }
        else {
          console.log("Image hosting problem", data);
          toast.error(data.error.message);
          setIsDataLoading(false);
        }
      })
      .catch(error => {
        console.log("Image hosting error", error);
        setIsDataLoading(false);
      })
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
