import { Outlet} from "react-router-dom";
import {lazy} from "react";

const Sidebar = lazy(() => import('./Sidebar.tsx'))
const DashboardLayout =() =>{
    return(
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 p-6">
                <div className="flex justify-between items-center mb-6">
               </div>
                <Outlet/>
            </div>
        </div>
    )
}
export default DashboardLayout
