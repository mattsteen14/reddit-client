import React from "react";
import './LoadingErrorWrapper.css'
import { PostLoading } from "../../features/Post/PostLoading";

export const LoadingErrorWrapper = ({ isLoading, error, children }) => {
    if(isLoading) {
        return (
            <div>
                <PostLoading />
            </div>
        );
    }
    if(error) {
        return (
            <div className='error'>
                    <h1>Failed to load content.</h1>
                    <h2>Error: {error.status}</h2>
                    <h3>{error.message || 'An error occurred'}</h3>
                    <button
                        type='button'
                        className='retry-button'
                        onClick={() => window.location.reload()}
                    >
                        TRY AGAIN
                    </button>
                </div>
        );
    }
    return <>{children}</>;
}