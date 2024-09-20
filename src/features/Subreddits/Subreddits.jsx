import React from 'react';
import { useDispatch } from 'react-redux';
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
        <div>
            {isLoading && <h2>Loading...</h2>}
            {error &&
                <div>
                    <h2>Error: {error.status}</h2>
                    <h3>({error.error.message})</h3>
                </div>
            }
            {isSuccess && (
                <div className='subreddits'>
                    <h2>Subreddits</h2>
                    <ul>
                        <li>
                            <button
                            type='button'
                            onClick={setPopular}
                            >
                                <img
                                    src=''
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
                                        src={subreddit.icon_img}
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
