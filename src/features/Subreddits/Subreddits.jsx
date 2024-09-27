import React from 'react';
import { useDispatch } from 'react-redux';
import subredditLogo from '../../subredditLogo.svg';
import './Subreddits.css';
import { useGetSubredditsQuery } from '../../reddit/redditApiSlice';
import { setSubreddit } from '../../reddit/subRedditSlice';
import { setView } from '../View/viewSlice';

export const Subreddits = () => {
    const dispatch = useDispatch();
    const changeSubreddit = (newSubreddit) => {
        dispatch(setSubreddit(newSubreddit));
        dispatch(setView('home'));
    };
    const setPopular = () => {
        dispatch(setSubreddit('r/popular'));
    }

    const {
        data: subreddits,
        error,
        isSuccess
    } = useGetSubredditsQuery();

    return (
        <div className='subreddits'>
            {error &&
                console.log(error)
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
