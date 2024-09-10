import React from 'react'
import './Home.css';
import { Post } from '../Post/Post'; 
import { PostLoading } from '../Post/PostLoading';
import { Card } from '../../components/Card/Card';
import { useGetSubredditPostsQuery } from '../../reddit/redditApiSlice';

export const Home = () => {
  const {
    data: posts,
    error,
    isLoading
  } = useGetSubredditPostsQuery();

  if (isLoading) {
    return(
      <div>
        <PostLoading />
      </div>
      );
}

  if (error) {
    return(
      <div>
        <h2>
          FAILED TO LOAD CONTENT
        </h2>
        <button>
          RETRY
        </button>
      </div>
      );
}
  return (
    <div>
      {posts.map((post) => (
        <Card
        key={post.id}
        >
          <Post 
          post={post}
          />
        </Card>
      ))}
    </div>
  )
}
