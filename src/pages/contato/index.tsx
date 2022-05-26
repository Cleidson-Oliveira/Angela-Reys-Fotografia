import Header from "../../components/Header";
import Input from "../../components/utility/Input";
import Button from "../../components/utility/Button";
import Footer from "../../components/Footer";

import { Title, Wrapper, ContactField } from "./style";

export default function Contato() {

    return (
        <>
            <Header home={false} />
            <Wrapper>
                <div>
                    <Title><h1>Entre em contato</h1></Title>
                    <Input type="text" labelText="Nome" placeholderText="Nome"/>
                    <Input type="email" labelText="E-mail" placeholderText="E-mail"/>
                    <Input type="textArea" labelText="Mensagem" placeholderText="Digite aqui a sua mensagem"/>
                    <Button caminho="">Enviar</Button>
                </div>
                <ContactField>
                    <img src={"Angela02.jpg"} alt="Ângela Reys - Fotógrafa" />

                    <h3>E-mail:</h3>
                    <p>angelareysfotografia@gmail.com</p>

                    <h3>Endereço:</h3>
                    <p>São Felipe- Bahia</p>
                    <p>Cep: 44550-000</p>

                    <h3>Horário de atendimento:</h3>
                    <p>Segunda a sexta - 8h às 18h</p>
                    <p>Sábado - 8h às 12h</p>
                </ContactField>
            </Wrapper>
            <Footer />
        </>
    )
}