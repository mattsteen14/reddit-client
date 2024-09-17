import React from 'react'
import './Comment.css';
import { timeAgo } from '../../utils/timeAgo';
import { useGetPostCommentsQuery } from '../../reddit/redditApiSlice';

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
      {error && <h2>Error: {error}</h2>}
      {isSuccess && (
        <div className='comment'>
          {comments.map((comment) => (
            <div>
              <img
              src={comment.author.icon_img}
              alt={`${comment.author} profile `}
              className='user-profile-image'
              />
              <h3>
                {comment.author}
              </h3>
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
