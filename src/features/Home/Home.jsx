import React from 'react'
import { useSelector } from 'react-redux';
import './Home.css';
import { LoadingErrorWrapper } from '../../components/LoadingErrorWrapper/LoadingErrorWrapper';
import { Post } from '../Post/Post';
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
    <LoadingErrorWrapper
      isLoading={isLoading}
      error={error}
    >
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
    </LoadingErrorWrapper>
  )
}
