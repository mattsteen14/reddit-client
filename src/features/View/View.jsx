import { useSelector } from 'react-redux';
import Search from '../Search/Search';
import { Home } from '../Home/Home';

const View = () => {
    const view = useSelector((state) => state.view.view)
    
    return (
        view.toLowerCase() == 'search' ? <Search /> : <Home />
    )
}

export default View;