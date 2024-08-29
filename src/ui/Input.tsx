import  {FC, HTMLInputTypeAttribute} from "react";


type Props = {
    type:HTMLInputTypeAttribute
    value: string | Date
    name?:string
    setValue: (value: string) => void
    placeholder?: string
    required?:boolean
}
const Input:FC<Props> = ({value, setValue, type, placeholder, required,name}) =>{
    return(
        <input
            required={required}
            name={name ? name: ''}
            type={type}
            value={String(value)}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none"
        />
    )
}
export default Input
