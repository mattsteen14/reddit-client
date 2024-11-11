import viewReducer, { setView } from './viewSlice';

describe('viewSlice', () => {
    it('should return the initial state', () => {
        const initialState = viewReducer(undefined, { type: undefined });
        expect(initialState).toEqual({ view: 'home' });
    });
    it('should handle setView', () => {
        const state = viewReducer({ view: 'home' }, setView('search'));
        expect(state).toEqual({ view: 'search' });
    });
});