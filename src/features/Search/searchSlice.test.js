import searchReducer, { setSearch, delSearch } from "./searchSlice";

describe('searchSlice', () => {
    it('should return the initial state', () => {
        const initialState = searchReducer(undefined, { type: undefined });
        expect(initialState).toEqual({ search: 'popular' });
    });
    it('should handle setSearch', () => {
        const state = searchReducer({ search: 'popular' }, setSearch('r/test'));
        expect(state).toEqual({ search: 'r/test' });
    });
    it('should handle delSearch', () => {
        const state = searchReducer({ search: 'r/test' }, delSearch());
        expect(state).toEqual({ search: '' });
    });
});