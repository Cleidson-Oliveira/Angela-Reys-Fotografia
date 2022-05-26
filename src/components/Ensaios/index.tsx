import CardEnsaio from "../utility/CardEnsaios";

interface RecentWorks {
    _id: string,
    key: string,
    capa: string,
    nomeCliente: string,
    tipoEnsaio: string,
}

interface EnsaiosProps {
    widthCards: string,
    tipoEnsaio: {tipoEnsaio: string},
    apiDataEnsaios?: RecentWorks[] ,
}

export default function Ensaios ({ widthCards, tipoEnsaio, apiDataEnsaios }: EnsaiosProps) {
    
    let ensaiotype = tipoEnsaio.tipoEnsaio || "todos";

    return apiDataEnsaios != null ? (
        <>
        {
            apiDataEnsaios.map(element => (
                element.tipoEnsaio.toLowerCase() == ensaiotype || ensaiotype == 'todos'
                ) && (
                    <CardEnsaio
                        key={element.key}
                        caminho={`/ensaio/${element._id}`}
                        capa={element.capa}
                        nomeCliente={element.nomeCliente}
                        tipoEnsaio={element.tipoEnsaio}
                        widthCards={widthCards}
                    />
                )
            )
        }
        </>
    ) : <></>
}