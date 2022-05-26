import Link from "next/link";

import { Wrapper } from "./style";

export default function Button ({ caminho, children }){
    return ( 
        <Wrapper>
            <button><Link href={caminho}>{children}</Link></button>
        </Wrapper>
     );
}
 
