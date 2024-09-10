import React from 'react';
import './Subreddits.css';
import { useGetSubredditsQuery } from '../../reddit/redditApiSlice';

export const Subreddits = () => {

    const {
        data: subreddits,
        error,
        isLoading
    } = useGetSubredditsQuery();

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
        <div>
            <h2>Subreddits</h2>
            <ul>
                {subreddits.map((subreddit) => (
                    <li 
                    key={subreddit.id}
                    >
                        {subreddit.display_name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
