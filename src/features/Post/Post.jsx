import React from 'react'
import './Post.css';
import { PostLoading } from './PostLoading';
import { useGetSubredditPostsQuery } from '../../reddit/redditApiSlice';
// import {
//     TiMessage
// } from 'react-icons/ti';

export const Post = () => {
  const {
    data: posts,
    error,
    isLoading
  } = useGetSubredditPostsQuery();

  if (isLoading) 
    return
      <div>
        <PostLoading />
      </div>;

  if (error) 
    return
      <div>
        <h2>
          FAILED TO LOAD CONTENT
        </h2>
        <button>
          RETRY
        </button>
      </div>;

  return (
    <ul>
      {posts.map((post) => (
        <li 
        key={post.id}
        >
          {post.title}
        </li>
      ))}
    </ul>
  )
}
