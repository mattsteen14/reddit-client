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
        <div >
          {comments.map((comment) => (
            <div key={comment.id}
            className='comment'
            >
              <div className='comment-header'>
                <div className='author-info'>
                  <Avatar author={comment.author} />
                  <span className='author-name'>u/{comment.author}</span>
                </div>
                <span className='timestamp'>
                  {timeAgo(comment.created_utc)}
                </span>
              </div>
              <div className='comment-body'>
                <p>{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
