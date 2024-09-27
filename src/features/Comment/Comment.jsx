import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
      {isLoading && 
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
      }
      {error &&
        console.log(error)
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
