import {ButtonHTMLAttributes, FC, ReactNode} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
};
const ButtonSubmit:FC<Props> = ({children, ...props}) =>{
    return(
        <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            {...props}
        >
            {children}
        </button>
    )
}
export default ButtonSubmit
