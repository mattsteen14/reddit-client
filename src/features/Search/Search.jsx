import { useSelector } from 'react-redux';
import { Card } from '../../components/Card/Card';
import { useGetSearchResultsQuery } from '../../reddit/redditApiSlice'
import { LoadingErrorWrapper } from '../../components/LoadingErrorWrapper/LoadingErrorWrapper';
import { Post } from '../Post/Post'

export const Search = () => {
    const term = useSelector((state) => state.search.search) || 'popular';
    const {
        data: posts,
        error,
        isLoading,
        isSuccess
    } = useGetSearchResultsQuery(term);

    return (
        <LoadingErrorWrapper
            isLoading={isLoading}
            error={error}
        >
            {isSuccess &&
                <div className='post'>
                    <h2 className='results-header'>Results</h2>
                    {posts.map((post) => (
                        <Card key={post.id}>
                            <Post post={post} />
                        </Card>
                    ))}
                </div>
            }
        </LoadingErrorWrapper>
    )
}