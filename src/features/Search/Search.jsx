import { useSelector } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { useGetSearchResultsQuery } from '../../reddit/redditApiSlice'
import { Post } from '../Post/Post'
import { PostLoading } from '../Post/PostLoading'

export const Search = () => {
    const term = useSelector((state) => state.search.search) || 'popular';
    const {
        data: posts,
        error,
        isLoading,
        isSuccess
    } = useGetSearchResultsQuery(term);

    return (
        <div>
            {isLoading &&
                <div>
                    <h2>Loading...</h2>
                    <PostLoading />
                </div>}
            {error &&
                <div>
                    <h2>Failed to load content.</h2>
                    <h3>Error: {error.status}</h3>
                    <h4>{error.data?.message || error.message || error.error}</h4>
                    <button
                        type='button'
                        className='retry-button'
                        onClick={() => window.location.reload()}
                    >
                        TRY AGAIN
                    </button>
                </div>
            }
            {isSuccess &&
                <div className='post'>
                    Results
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <Post post={post} />
                        </Card>
                    ))}
                </div>
            }
        </div>
    )
}