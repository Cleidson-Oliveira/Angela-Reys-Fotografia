import { Wrapper } from "./style";

export default function Input({ type, labelText, placeholderText }) {
    return (type=="textArea") ? (
        <Wrapper>
            <p>
                {labelText}
            </p>
            <textarea 
                cols="30" 
                rows="5"
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