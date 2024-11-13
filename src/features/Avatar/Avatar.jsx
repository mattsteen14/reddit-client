import React from 'react'
import './Avatar.css';
import userLogo from '../../userLogo.svg';
import { useGetAuthorIconQuery } from '../../reddit/redditApiSlice';

export const Avatar = ({ author }) => {
  const { data: authorIcon } = useGetAuthorIconQuery(author);
  return (
    <img
      src={authorIcon?.icon_img || userLogo}
      onError={(e) => { e.target.src = userLogo }}
      alt={`Avatar of user ${author}`}
      className='author-icon'
      loading='lazy'
    />
  )
}
