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
          <h2>Failed to load content.</h2>
          <h3>Error: {error.status}</h3>
          <h4>{error.data?.message || error.message || error.error}</h4>
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
        <div className='post'>
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
