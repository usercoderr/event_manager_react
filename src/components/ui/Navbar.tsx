import {FC} from "react";
import {Link} from "react-router-dom";
import {EAppRoutes} from "../../routes/types.ts";

const Navbar:FC =() =>{
    return(
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex justify-between">
                <Link to={EAppRoutes.HOME}>
                    <h1 className="text-white text-2xl font-bold">Event Manager</h1>
                </Link>
                <Link className={'text-white'} to={EAppRoutes.CONTACTS}>Contact</Link>
                <div>
                    <Link to="/dashboard" className="text-white mr-4">Dashboard</Link>
                    {/*{*/}
                    {/*    isAuthenticated*/}
                    {/*        ?*/}
                    {/*        : (<>*/}
                    {/*                <Link to="/login" className="text-white mr-4">Login</Link>*/}
                    {/*                <Link to="/register" className="text-white">Register</Link>*/}
                    {/*            </>*/}
                    {/*        )}*/}
                </div>
            </div>
        </nav>
    )
}
export default Navbar
