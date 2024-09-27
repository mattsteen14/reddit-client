import React from 'react'
import './Comment.css';
import { timeAgo } from '../../utils/timeAgo';
import { useGetPostCommentsQuery } from '../../reddit/redditApiSlice';
import { Avatar } from '../Avatar/Avatar';

export const Comment = ({ permalink }) => {
  const {
    data: comments,
    error,
    isLoading,
    isSuccess
  } = useGetPostCommentsQuery(permalink);

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error &&
        <div>
          <h2>Error: {error.status}</h2>
          <h3>{error.data?.message || error.message || error.error}</h3>
        </div>
      }
      {isSuccess && (
        <div className='comment'>
          {comments.map((comment) => (
            <div>
              <Avatar author={comment.author} />
              <span>
                {comment.author}
              </span>
              <span
                className='comment-timestamp'
              >
                {timeAgo(comment.created_utc)}
              </span>
              <p
                key={comment.id}
              >
                {comment.body}
              </p>
            </div>
          ))}
        </div>
      )
      }
    </div>
  )
}
