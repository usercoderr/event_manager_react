import {FC, ReactNode} from "react";
type Props ={
    children:ReactNode
}
const PageLayout:FC<Props> =({children}) =>{
    return(
        <div className="flex flex-col justify-center items-center py-20 h-full">
            {children}
        </div>
    )
}
export default PageLayout
