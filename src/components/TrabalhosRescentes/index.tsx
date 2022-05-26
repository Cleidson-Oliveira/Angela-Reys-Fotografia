import Button from "../utility/Button";
import Ensaios from "../Ensaios";

import { Wrapper } from './style';

interface RecentWorks {
    _id: string,
    key: string,
    capa: string,
    nomeCliente: string,
    tipoEnsaio: string,
}

interface RecentWorksProps {
    ensaiosRecentes?: RecentWorks[]
}

export default function RecentWorks({ ensaiosRecentes }: RecentWorksProps) {

    return (
        <div>
            <div className="title">
                <h1>Trabalhos rescentes</h1>
            </div>
            <Wrapper>
                <Ensaios
                    widthCards="33.33%"
                    tipoEnsaio={{tipoEnsaio: 'todos'}}
                    apiDataEnsaios={ensaiosRecentes}
                />                
            </Wrapper>
            <Button caminho="/galeria/todos">{"Ver mais"}</Button>
            
        </div>
    )
}