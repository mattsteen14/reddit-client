import React from 'react'
import './Comment.css';
import { useGetPostCommentsQuery } from '../../reddit/redditApiSlice';

export const Comment = ({permalink}) => {
  const {
    data: comments,
    error,
    isLoading
  } = useGetPostCommentsQuery(permalink);

  if (isLoading)
    return
      <div>
        Loading...
      </div>;

  if (error)
    return
      <div>
        Error: {error.message}
      </div>;

  return (
    <ul>
      {comments.map((comment) => (
        <li
        key={comment.id}
        >
          {comment.body}
        </li>
      ))}
    </ul>
  )
}
