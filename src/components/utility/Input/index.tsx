import { Wrapper } from "./style";

interface InputProps {
    type: string,
    labelText: string,
    placeholderText: string
}

export default function Input({ type, labelText, placeholderText }: InputProps) {
    return (type=="textArea") ? (
        <Wrapper>
            <p>
                {labelText}
            </p>
            <textarea 
                cols={30}
                rows={5}
                placeholder={placeholderText}
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
            />
        </Wrapper>
    ) 
}