import Head from "next/head";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";

import Header from "../../components/Header";
import Ensaios from "../../components/Ensaios";
import Button from "../../components/utility/Button";
import Footer from "../../components/Footer";

import Wrapper, { EnsaiosContent, ListaTiposEnsaios } from "./style";

interface Ensaio {
    _id: string,
    key: string,
    capa: string,
    nomeCliente: string,
    tipoEnsaio: string,
}

interface GalleryProps {
    ensaios: Ensaio[]
}

export default function Gallery ({ ensaios }: GalleryProps) {

    return (
        <>
            <Head>
                <title>Galeria | Ângela Reys Fotografia</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <Header home={false} />

            <Wrapper>
                <ListaTiposEnsaios>
                    <ul>
                        <li><Link href="/galeria/todos">Todos</Link></li>
                        <li><Link href="/galeria/feminino"> Ensaio feminino</Link></li>
                        <li><Link href="/galeria/aniversário">Ensaio de aniversário</Link></li>                        
                        <li><Link href="/galeria/gestante">Ensaio gestante</Link></li>                    
                    </ul>
                </ListaTiposEnsaios>
                <EnsaiosContent>
                    <Ensaios widthCards="25%" tipoEnsaio={{tipoEnsaio: "todos"}} apiDataEnsaios={ensaios}/>
                </EnsaiosContent>
                
                {/* <Button caminho="" >Ver mais</Button> */}
                
            </Wrapper>

            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  
    return ({
        paths: [
            {
                "params": {
                    "tipoEnsaio": "todos",
                },
            }
        ],
        fallback: true
    })
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { tipoEnsaio } = params!;
    
    const data = await fetch(`${process.env.BACK_END_URL}/getImages`);
    let ensaios = await data.json();

    if (tipoEnsaio != "todos") {
        const updatedEnsaios: Ensaio[] = ensaios.filter((ensaio: Ensaio) => {
            return ensaio.tipoEnsaio.toLowerCase() == tipoEnsaio!.toString().toLowerCase()
        })
        ensaios = updatedEnsaios.length > 0 ? updatedEnsaios : ensaios //// implementar redirect posteriormente
    }

    return ({
        props: {
          ensaios
        },
        revalidate: 60 * 60 * 24 // 24 hrs
    })
}
