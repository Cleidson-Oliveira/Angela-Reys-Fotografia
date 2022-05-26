import { Wrapper, Content, Card } from "./style";

export default function Depoimentos(){

    let depoimentos = [
        {
            "nome": "Mariana",
            "imagem": "Mariana.png",
            "texto": "Foi além das minhas expectativas!! Eu já não tenho mais palavras para descrever o quanto eu amei o ensaio e o seu trabalho. Foi muito além do que eu imaginava que seria. A sua paciência comigo, a forma como interagiu, exatamente tudo me ajudou a ficar mais à vontade no ensaio, só tenho agradecer pelo carinho e dedicação. Sem falar na edição e entrega das fotos,eu amei tudo! Me ajudou muito a elevar minha autoestima!"
        },
        {
            "nome": "Luana",
            "imagem": "Luana.png",
            "texto": "Obrigado você meu bem, você é uma profissional muito atenciosa. Amei muito fazer as fotos com você. Todas as fotos saíram muito bem editadas, você tomou cuidado em cada detalhe, foi um dia muito especial me sentir confiante, confortável e muito poderosa. Você sempre elogiando e atenta a tudo e sim teremos próximo ensaio Confio em seu trabalho, obrigado e super recomendo!!"
        },
        {
            "nome": "Eliane",
            "imagem": "Eliane.jpg",
            "texto": "Mulher!!! Muito obrigada mesmo, você é perfeita. Ficaram incríveis as fotos e o vídeo. Agora não perco mais. Muito sucesso pra vocês. Vocês arrasaram e com esse carinho e atenção que você tem você vai longe. Parabéns 👏 estou muito feliz mesmo de verdade ❤️"
        }
        
    ]

    return (
        <Wrapper>
            <div className="title">
                <h1>Depoimentos</h1>
            </div>
            <Content>
                {
                    depoimentos.map(depoimento => (
                        <Card key={depoimento.nome}>
                            <img src={depoimento.imagem} />
                            <p>{depoimento.nome}</p>
                            <p>{depoimento.texto}</p>
                        </Card>
                    ))
                }
            </Content>
        </Wrapper>
    )
}