import {FC} from 'react';
import {Outlet} from 'react-router-dom';

const PrivateRoute: FC = () => {
    return <Outlet/>
};

export default PrivateRoute;
