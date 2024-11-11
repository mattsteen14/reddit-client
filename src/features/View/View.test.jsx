import { render } from '@testing-library/react';
import { setupApiStore } from '../../api/setupApiStore';
import { redditApi } from '../../reddit/redditApiSlice';
import { View } from './View';
import { setView } from './viewSlice';

const storeRef = setupApiStore(redditApi);

describe('View', () => {
    it('should render the Home component', () => {
        const initialState = storeRef.store.getState().view.view;
        render(
            <storeRef.wrapper>
                <View />
            </storeRef.wrapper>
        );

        expect(initialState).toBe('home');
    });
    it('should render the Search component when view is search', () => {
        const searchState = storeRef.store.dispatch(setView('search'));

        render(
            <storeRef.wrapper>
                <View />
            </storeRef.wrapper>
        );

        expect(searchState).toEqual({
            payload: 'search',
            type: 'view/setView'
        });
    });
});