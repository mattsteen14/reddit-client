import React from 'react';
import './Subreddits.css';
import { useGetSubredditsQuery } from '../../reddit/redditApiSlice';

export const Subreddits = () => {

    const {
        data: subreddits,
        error,
        isLoading,
        isFetching,
        isSuccess
    } = useGetSubredditsQuery();

    return (
        <div>
            {isLoading && <h2>Loading...</h2>}
            {isFetching && <h2>Fetching...</h2>}
            {error && <h2>Error: {error.message}</h2>}
            {isSuccess && (
                <div className='subreddits'>
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
            )}
        </div>
    )
}
