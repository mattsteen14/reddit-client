import subRedditReducer, { setSubreddit } from '../subRedditSlice.js';

describe('subRedditSlice', () => {
    it('should return the initial state', () => {
        const initialState = subRedditReducer(undefined, { type: undefined });
        expect(initialState).toEqual({
            subReddit: 'r/popular'});
    });
    it('should handle setSubreddit', () => {        
        const state = subRedditReducer({ subReddit: 'r/popular'}, setSubreddit('r/test'));
        expect(state).toEqual({
            subReddit: 'r/test'});
    });
});