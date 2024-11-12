import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import moment from 'moment';
import { FaFaceSadTear } from "react-icons/fa6";
import './Comment.css';
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
        <div data-testid="comment-loading">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      }
      {error &&
      <div
      data-testid="comment-error"
      className='comment-error'
      >
        <div
          className='error-header'
        >
          <div
            className='error-user'
          >
            <FaFaceSadTear
              className='error-icon'
              role='img'
            />
            <span
            className='error-username'
            >u/no_comment</span>
          </div>
          <span
            className='timestamp'>
            Now
          </span>
        </div>
        <div 
        className='comment-error-body'
        >
          <p>Hey. These comments have failed to load!</p>
        </div>
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
                  {moment(comment.created_utc * 1000).fromNow()}
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
