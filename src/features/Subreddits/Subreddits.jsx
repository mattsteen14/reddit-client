import React from 'react';
import { useDispatch } from 'react-redux';
import subredditLogo from '../../subredditLogo.svg';
import './Subreddits.css';
import { useGetSubredditsQuery } from '../../reddit/redditApiSlice';
import { setSubreddit } from '../../reddit/subRedditSlice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const changeSubreddit = (newSubreddit) => {
        dispatch(setSubreddit(newSubreddit));
    };
    const setPopular = () => {
        dispatch(setSubreddit('r/popular'));
    }

    const {
        data: subreddits,
        error,
        isLoading,
        isSuccess
    } = useGetSubredditsQuery();

    return (
        <div className='subreddits'>
            {isLoading && <h2>Loading...</h2>}
            {error &&
                <div>
                    <h2>Error: {error.status}</h2>
                    <h3>{error.data?.message || error.message || error.error}</h3>
                </div>
            }
            {isSuccess && (
                <div>
                    <h2>Subreddits</h2>
                    <ul>
                        <li>
                            <button
                            type='button'
                            onClick={setPopular}
                            >
                                <img
                                    src={subredditLogo}
                                    alt={`Popular icon `}
                                    className='popular-icon'
                                />
                                Popular
                            </button>
                        </li>
                        {subreddits.map((subreddit) => (
                            <li
                                key={subreddit.id}
                            >
                                <button
                                    type='button'
                                    onClick={() => changeSubreddit(subreddit.display_name_prefixed)}
                                >
                                    <img
                                        src={subreddit.icon_img || subredditLogo}
                                        alt={`${subreddit.display_name} icon `}
                                        className='subreddit-icon'
                                    />
                                    {subreddit.display_name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
