import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PostService from '../APi/PostService';
import { useFetching } from '../hooks/useFetching';
import { useNavigate } from "react-router-dom";

function PostIdPage() {
  const params = useParams();
  const router = useNavigate();

  const [post, setPost] = useState();

  const [fetchPostById] = useFetching(async () => {
    const res = await PostService.getOneById(params.id);
    setPost(res.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  console.log(post, 'post');
  return (
    <div className="post-wrapper">
      <div
        className="post-image"
        onClick={() => router(`/posts/carousel`, { replace: true })}>
        {post?.photoUrls.map((images, index) =>
          <div
            key={index}
            className="post-wrapper-image"
          >
            <img className="post-image-wrapper" src={images} alt={post.name}
              sizes="
            (min-width: 2420px) 2000px, 
            (min-width: 720px) calc(94.76vw - 274px), 
            (min-width: 520px) calc(100vw - 96px), 
            calc(100vw - 32px)
          "
            />
            <img className="post-image-relative" src={images} alt={post.name}
              sizes="
            (min-width: 2420px) 2000px, 
            (min-width: 720px) calc(94.76vw - 274px), 
            (min-width: 520px) calc(100vw - 96px), 
            calc(100vw - 32px)
          "
            />
          </div>
        )}
      </div>
      <div className="post-block">
        <div className="post-info">
          <span>{post?.name}</span>
          <img className="post-img-info" src={post?.photoUrls[0]} alt="name" />
        </div>
        <div className="post-description">
          <h4>{post?.name}</h4>
          <span>{post?.category?.name}</span>
        </div>
      </div>
    </div>
  )
}

export default PostIdPage