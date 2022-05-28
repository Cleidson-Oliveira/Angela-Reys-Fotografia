import Link from "next/link";

import { Wrapper } from "./style";

interface FunctionalButtonProps {
    children: string,
    func: () => void
}

interface ButtonProps {
    caminho: string,
    children: string
}

export default function Button ({ caminho, children }: ButtonProps){
    return ( 
        <Wrapper>
            <button><Link href={caminho}>{children}</Link></button>
        </Wrapper>
     );
}

export function FunctionalButton ({ children, func }: FunctionalButtonProps){
    return ( 
        <Wrapper>
            <button onClick={() => {func()}}>{children}</button>
        </Wrapper>
     );
}
 
