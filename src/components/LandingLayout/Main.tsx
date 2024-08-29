import {FC} from "react";
import {Outlet} from "react-router-dom";

const Main:FC =() =>{
    return(
        <main className={'main'}>
            <Outlet/>
        </main>
    )
}
export default Main
