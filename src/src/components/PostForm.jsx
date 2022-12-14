import React, { useState } from "react";
import PostService from "../APi/PostService";
import { useFetching } from "../hooks/useFetching";

const PostForm = ({ setModal, setPostData }) => {

  const [fetchPosts] = useFetching(async () => {
    const response = await PostService.getAll('available');
    setPostData(response.data);
  });

  const [onePost, setOnePost] = useState({
    categoryName: "",
    petName: "",
    photoUrls: "https://hostingkartinok.com/foto/wp-content/uploads/2014/10/%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%B8-%D0%B4%D0%B8%D0%BA%D0%B8%D0%B5-%D0%B6%D0%B8%D0%B2%D0%BE%D1%82%D0%BD%D1%8B%D0%B5.jpg",
    status: "available",
  });

  function mySelect(e) {
    setOnePost({ ...onePost, status: e.target.value });
  }

  function addNewPost(e) {
    e.preventDefault();
    const newPost = { ...onePost, id: Date.now() };
    PostService.createPost(newPost);
    setOnePost({
      categoryName: "",
      petName: "",
      photoUrls: "",
      status: ""
    });
    setModal(false);
    fetchPosts();
  }

  return (
    <form className="post-form">
      <input
        value={onePost.categoryName}
        onChange={(e) => setOnePost({ ...onePost, categoryName: e.target.value })}
        type="text"
        placeholder="Category name"
      />
      <input
        value={onePost.petName}
        onChange={(e) => setOnePost({ ...onePost, petName: e.target.value })}
        type="text"
        placeholder="Name"
      />
      <input
        value={onePost.photoUrls}
        onChange={(e) => setOnePost({ ...onePost, photoUrls: e.target.value })}
        type="text"
        placeholder="Photo url/s"
      />
      <label htmlFor="status">Choose Status:</label>
      <select id="status" onChange={(e) => mySelect(e)} name="statusList" form="statusForm">
        <option value="available">available</option>
        <option value="pending">pending</option>
        <option value="sold">sold</option>
      </select>
      <button onClick={addNewPost}>Create post</button>
    </form>
  );
};

export default PostForm;
