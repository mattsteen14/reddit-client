import React from 'react'
import './Post.css';
import { timeAgo } from '../../utils/timeAgo';
import {
    TiMessage
} from 'react-icons/ti';
import { 
  PiArrowFatUpLight 
} from "react-icons/pi";

export const Post = ({ post }) => {
  return (
    <div className='post'>
      <div post-header>

      </div>
        <h2>
          {post.title}
        </h2>
        <p>
          {post.body}
        </p>
        <div className='post-footer'>
          <span>
          <PiArrowFatUpLight />
            {post.score}
          </span>
          <span
          className='post-timestamp'
          >
            {timeAgo(post.created_utc)}
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
