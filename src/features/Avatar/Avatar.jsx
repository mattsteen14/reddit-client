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
      alt={`(${author} icon)`}
      className='author-icon'
    />
  )
}
