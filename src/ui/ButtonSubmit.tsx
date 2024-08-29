import  {FC, ReactNode} from "react";

type Props ={
    children: ReactNode
}
const ButtonSubmit:FC<Props> = ({children}) =>{
    return(
        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
            {children}
        </button>
    )
}
export default ButtonSubmit
