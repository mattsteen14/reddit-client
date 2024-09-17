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
        isFetching,
        isSuccess
    } = useGetSearchResultsQuery(term);
    
    return (
        <div>
            {isLoading &&
            <div>
                <h2>Loading...</h2>
                <PostLoading />
            </div>}
            {isFetching && <h2>Fetching...</h2>}
            {error &&
            <div>
                <h2>Error: {error}</h2>
                <h2>
                    FAILED TO LOAD CONTENT
                </h2>
                <button className='retry-button'>
                    RETRY
                </button>
            </div>}
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