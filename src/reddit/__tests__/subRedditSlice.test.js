import subRedditReducer from '../subRedditSlice.js';

describe('subRedditSlice', () => {
    it('should return the initial state', () => {
        const initialState = subRedditReducer(undefined, { type: undefined });
        expect(initialState).toEqual({
            subReddit: 'r/popular'});
    });
    it('should handle setSubreddit', () => {        
        const action = { type: 'subReddit/setSubreddit', payload: 'r/test' };
        const state = subRedditReducer({ subReddit: 'r/popular'}, action);
        expect(state).toEqual({
            subReddit: 'r/test'});
    });
});