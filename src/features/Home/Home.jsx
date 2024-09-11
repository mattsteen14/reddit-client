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
    isLoading,
    isFetching,
    isSuccess
  } = useGetSubredditPostsQuery();

  return (
    <div>
      {isLoading &&
        <div>
          <PostLoading />
        </div>}
      {isFetching && <h2>Fetching...</h2>}
      {error &&
        <div>
          <h2>
            FAILED TO LOAD CONTENT
          </h2>
          <button className='retry-button'>
            RETRY
          </button>
        </div>}
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
