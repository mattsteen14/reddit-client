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
          <h2>Loading...</h2>
          <PostLoading />
        </div>}
      {error &&
        <div>
          <h2>Error: {error.status}</h2>
          <h3>({error.data?.message})</h3>
          <button
            type='button'
            className='retry-button'
            onClick={() => window.location.reload}
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
