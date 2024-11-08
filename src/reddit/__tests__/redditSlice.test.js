import redditReducer,  { toggleComments } from '../redditSlice';

describe('redditSlice', () => {
    it('should toggle comments visibility for a specific post ID', () => {
        // Arrange
        const postId = 'test-post-id';
        const initialState = {
            commentsVisible: {
                [postId]: false,
            },
        };
        // Act: toggle comments for the post ID
        const nextState = redditReducer(initialState, toggleComments(postId));
        // Assert
        expect(nextState.commentsVisible[postId]).toBe(true);
        // Act again: toggle comments for the same post ID
        const finalState = redditReducer(nextState, toggleComments(postId));
        // Assert
        expect(finalState.commentsVisible[postId]).toBe(false);
    });
    it('should add a new post ID to commentsVisible and set it to true', () => {
        const postId = 'new-post-id';
        const initialState = {
            commentsVisible: {}
        };
        const nextState = redditReducer(initialState, toggleComments(postId));
        expect(nextState.commentsVisible[postId]).toBe(true);
    });
})