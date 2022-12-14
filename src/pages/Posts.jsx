import React, { useEffect, useState } from 'react';
import { PostList } from '../components/PostList';
import PostService from '../APi/PostService';
import { useFetching } from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import MyModal from '../components/UI/modal/MyModal';
import PostForm from '../components/PostForm';
import "../styles/App.css";

function Posts() {
  const [postData, setPostData] = useState();
  const [modal, setModal] = useState(false);
  const [status, /*setStatus*/] = useState('available');

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(status);
    setPostData(response.data);
  });

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <div className="posts-wrapper">
      <button className="posts-button-create" onClick={() => setModal(true)}>
        Create Pet post
      </button>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm
          setModal={setModal}
          setPostData={setPostData}
        />
      </MyModal>
      {postError && <h1>Some error {postError}</h1>}
      {isPostLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          postData={postData}
        />
      )}
    </div>
  );
}

export default Posts;
