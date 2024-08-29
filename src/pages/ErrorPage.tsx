import {FC, useEffect} from "react";
import {useNavigate} from "react-router-dom";

const ErrorPage:FC =() =>{
    const navigate = useNavigate()
    useEffect(() =>{
        setTimeout(() =>{
            navigate('/')
        }, 2700)
    },[])
    return(
        <>
          404 Page  Sorry
        </>
    )
}
export default ErrorPage
