import React from 'react'
import './Post.css';
import { timeAgo } from '../../utils/timeAgo';
import {
  TiMessage
} from 'react-icons/ti';
import {
  PiArrowFatUpLight
} from "react-icons/pi";
import subredditLogo from '../../subredditLogo.svg';
import {
  useGetAuthorIconQuery
} from '../../reddit/redditApiSlice';

export const Post = ({ post }) => {
  const {
    data: authorIcon,
  } = useGetAuthorIconQuery(post.author);
  return (
    <div className='post'>
      <div className='post-header'>
        <img
          src={post.subreddit_icon || subredditLogo}
          alt={`(${post.subreddit} icon)`}
          className='subreddit-post-icon'
          width='50px'
          height='50px'
        />
        <span>
          {post.subreddit_name_prefixed}
        </span>
        <span
          className='post-timestamp'
        >
          {timeAgo(post.created_utc)}
        </span>
        <img
          src={authorIcon?.icon_img}
          alt={`(${post.author} icon)`}
          className='author-icon'
          width='50px'
          height='50px'
        />
        <span>
          u/{post.author}
        </span>
      </div>
      <div className='post-container'>
        <h2 className='post-title'>
          {post.title}
        </h2>
        <p className='post-body'>
          {post.selftext}
        </p>
        <div className='post-image-container'>
          <img
            src={post.url}
            alt=""
            className="post-image"
            width='500px'
            height='500px'
          />
        </div>
      </div>
      <div className='post-footer'>
        <span>
          <PiArrowFatUpLight />
          {post.score}
        </span>
        <button>
          <TiMessage />
        </button>
        <span>
          {post.num_comments}
        </span>
      </div>
    </div>
  )
}
