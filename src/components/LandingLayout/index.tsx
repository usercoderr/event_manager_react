import {FC} from "react";
import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Footer from "./Footer.tsx";

const LandingLayout:FC = () =>{
    return(
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}
export default LandingLayout
