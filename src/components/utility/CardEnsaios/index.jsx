import Link from "next/link";
import { Wrapper } from "./style";

export default function CardEnsaio({ widthCards, caminho, capa, nomeCliente, tipoEnsaio }) {
    
    return(
        <Wrapper 
            widthCards={widthCards}
        >
            <Link href={caminho}>
                <>
                    <img src={capa} />
                    <span>
                        <p>{nomeCliente}</p>
                        <p>{tipoEnsaio}</p>
                    </span>
                </>
            </Link>
        </Wrapper>
    )
}