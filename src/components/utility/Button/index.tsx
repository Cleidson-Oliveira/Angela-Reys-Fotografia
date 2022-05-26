import Link from "next/link";

import { Wrapper } from "./style";

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
 
