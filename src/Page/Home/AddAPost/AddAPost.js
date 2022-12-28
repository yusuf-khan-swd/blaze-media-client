import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const AddAPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (value) => {
    const { postBody } = value;
    console.log({ postBody });
  };

  const handleTextArea = () => {
    const postBody = document.getElementById("postBody").innerText;
    const str = postBody.replace(/\s\s+/g, " ");

    if (str.length < 1) {
      return toast.error("Please type what you are thinking")
    }
    console.log({ str });
  }

  return (
    <div className="container mx-auto mt-8 mb-16">
      <div className="m-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card flex-shrink-0 mx-auto">
            <div className="card-body">
              <div className="form-control">
                <textarea
                  {...register("postBody", { required: "Post body field is required" })}
                  placeholder={`What's happening?`}
                  className="textarea textarea-bordered"
                />
                <div
                  id="postBody"
                  placeholder={`What's happening?`}
                  className="textarea textarea-bordered min-h-[150px]" contentEditable></div>
                <p className="text-red-600"><small>{errors.postBody?.message}</small></p>
              </div>
              <div className="form-control mt-3">
                <button onClick={handleTextArea} className="btn btn-primary">Post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAPost;