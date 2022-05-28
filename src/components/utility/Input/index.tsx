import { Wrapper } from "./style";

interface InputProps {
    type: string,
    labelText: string,
    placeholderText: string
    value: string,
    setValue: (value:string)=>void
}

export default function Input({ type, labelText, placeholderText, value, setValue }: InputProps) {
    return (type=="textArea") ? (
        <Wrapper>
            <p>
                {labelText}
            </p>
            <textarea 
                cols={30}
                rows={5}
                placeholder={placeholderText}
                value={value}
                onChange={({target})=>setValue(target.value)}
            />
        </Wrapper>
    ) : (
        <Wrapper>
            <p>
                {labelText}
            </p>
            <input 
                type={type} 
                placeholder={placeholderText}
                value={value}
                onChange={({target})=>setValue(target.value)}
            />
        </Wrapper>
    ) 
}