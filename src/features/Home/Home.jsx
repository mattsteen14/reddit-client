import React from 'react'
import { useSelector } from 'react-redux';
import './Home.css';
import { Post } from '../Post/Post';
import { PostLoading } from '../Post/PostLoading';
import { Card } from '../../components/Card/Card';
import { useGetSubredditPostsQuery } from '../../reddit/redditApiSlice';

export const Home = () => {
  const selectSubreddit = useSelector((state) => state.subReddit.subReddit);
  const {
    data: posts,
    error,
    isLoading,
    isSuccess
  } = useGetSubredditPostsQuery(selectSubreddit);

  return (
    <div>
      {isLoading &&
        <div>
          <PostLoading />
        </div>}
      {error &&
        <div className='error'>
          <h1>Failed to load content.</h1>
          <h2>Error: {error.status}</h2>
          <h3>{error.message || 'An error occurred'}</h3>
          <button
            type='button'
            className='retry-button'
            onClick={() => window.location.reload()}
          >
            TRY AGAIN
          </button>
        </div>
      }
      {isSuccess && (
        <div
          className='post'
          data-testid='post-div'
        >
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
    </div>
  )
}
