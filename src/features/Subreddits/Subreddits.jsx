import React from 'react';
import { useDispatch } from 'react-redux';
import { FaFaceSadTear } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
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
        isLoading,
        isSuccess
    } = useGetSubredditsQuery();

    return (
        <div className='subreddits'>
            {isLoading &&
                <div
                    data-testid="subreddits-loading"
                    className='subreddits-loading'
                >
                    <h2>Subreddits</h2>
                    <ul>
                        <li>
                            <button
                                type='button'
                            >
                                <FaReddit
                                className='subreddits-loader'
                                role='img'
                                />
                                Loading...
                            </button>
                        </li>
                    </ul>
                </div>
            }
            {error &&
                <div
                    data-testid="subreddits-error"
                    className='subreddits-error'
                >
                    <h2>Subreddits</h2>
                    <ul>
                        <li>
                            <button
                                type='button'
                                onClick={() => window.location.reload()}
                            >
                                <FaFaceSadTear 
                                className='subreddits-error-icon'
                                role='img'
                                />
                                SubredditsLoadFail
                            </button>
                        </li>
                    </ul>
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
