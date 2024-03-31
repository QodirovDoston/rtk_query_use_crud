'use cil q ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,qw                                                            qqqqqqqqqqqqqqqqqqqqqqqqqqqq'
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home';

const Layout = () => {
    return (
        <>
            <Home />
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Layout