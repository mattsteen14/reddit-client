import { React, useState, useEffect, useRef } from 'react'
import './Post.css';
import { timeAgo } from '../../utils/timeAgo';
import {
  TiMessage
} from 'react-icons/ti';
import {
  PiArrowFatUpLight
} from "react-icons/pi";
import subredditLogo from '../../subredditLogo.svg';
import userLogo from '../../userLogo.svg';
import {
  useGetAuthorIconQuery
} from '../../reddit/redditApiSlice';

export const Post = ({ post }) => {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const postBodyRef = useRef(null);

  useEffect(() => {
    const element = postBodyRef.current;
    if (element.scrollHeight > element.clientHeight) {
      setIsOverflowing(true);
    }
  }, [post.selftext]);

  const {
    data: authorIcon,
  } = useGetAuthorIconQuery(post.author);
  return (
    <div className='post'>
      <div className='post-header'>
        <div className='post-subreddit-info'>
          <img
            src={post.subreddit_icon || subredditLogo}
            onError={(e) => { e.target.src = subredditLogo }}
            alt={`(${post.subreddit} icon)`}
            className='post-subreddit-icon'
          />
          <span className='post-subreddit-name'>
            {post.subreddit_name_prefixed}
          </span>
        </div>

        <span
          className='post-timestamp'
        >
          {timeAgo(post.created_utc)}
        </span>

        <div className='author-info'>
          <img
            src={authorIcon?.icon_img || userLogo}
            onError={(e) => { e.target.src = userLogo }}
            alt={`(${post.author} icon)`}
            className='author-icon'
          />
          <span className='author-name'>
            u/{post.author}
          </span>
        </div>

      </div>
      <div className='post-container'>
        <h2 className='post-title'>
          {post.title}
        </h2>
        <p
          className={`post-body ${isOverflowing ? 'has-more-content' : ''}`}
          ref={postBodyRef}
        >
          {post.selftext}
          {isOverflowing &&
            <div className='ellipsis-indicator'>
            </div>}
        </p>
        <div className='post-image-container'>
          <img
            src={post.url}
            alt=""
            className="post-image"
          />
        </div>
      </div>
      <div className='post-footer'>
        <span>
          <PiArrowFatUpLight className='icon' />
          {post.score}
        </span>
        <button>
          <TiMessage className='icon' />
          {post.num_comments}
        </button>
      </div>
    </div>
  )
}
