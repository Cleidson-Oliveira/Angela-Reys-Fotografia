import Link from "next/link";
import { Wrapper } from "./style";

interface CardEnsaioProps {
    widthCards: string,
    caminho: string,
    capa: string,
    nomeCliente: string,
    tipoEnsaio: string
}

export default function CardEnsaio({ widthCards, caminho, capa, nomeCliente, tipoEnsaio }: CardEnsaioProps) {
    
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