import React from 'react'
import './Comment.css';
import { useGetPostCommentsQuery } from '../../reddit/redditApiSlice';

export const Comment = ({ permalink }) => {
  const {
    data: comments,
    error,
    isLoading,
    isFetching,
    isSuccess
  } = useGetPostCommentsQuery(permalink);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {isFetching && <h2>Fetching...</h2>}
      {error && <h2>Error: {error}</h2>}
      {isSuccess && (
        <div className='comment'>
          {comments.map((comment) => (
            <p
              key={comment.id}
            >
              {comment.body}
            </p>
          ))}
        </div>
      )
      }
    </div>
  )
}
