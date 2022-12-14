import React, { memo } from 'react';
import { useNavigate } from "react-router-dom";

const PostListComponent = ({ postData }) => {
  const router = useNavigate();

  return (
    <div className='posts-list-wrapper' >
      {postData !== undefined && postData.map((item, index) => {
        return (
          item?.photoUrls.find((url) => url?.startsWith('http')) &&
          <div className='post-list-wrapper' onClick={() => router(`/posts/${item.id}`, { replace: true })} key={index}>
            <strong>{item.name}</strong>
            <img className='image-post-list' src={item.photoUrls} alt={item.name} />
          </div>
        )
      })}
    </div>
  );
};

export const PostList = memo(PostListComponent);