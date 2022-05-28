import Head from "next/head";

import { useState } from "react";

import Header from "../../components/Header";
import Input from "../../components/utility/Input";
import { FunctionalButton } from "../../components/utility/Button";
import Footer from "../../components/Footer";

import Wrapper, {Title, ContactField} from "./style";

import {sendContactMail} from "../../services/sendmail"

export default function Contato() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mensage, setMensage] = useState('')

    const sendMail = () => {
        sendContactMail(name, email, mensage)
            .then((response)=>{console.log(response)})
            .catch((err) => console.log(err))

        setName('')
        setEmail('')
        setMensage('')
    }
    
    return (
        <>
            <Head>
                <title>Contato | Ângela Reys Fotografia</title>
                <meta name="description" content="Generated by create next app" />
            </Head>

            <Header home={false} />

            <Wrapper>
                <div>
                    <Title><h1>Entre em contato</h1></Title>
                    <Input 
                        type="text" 
                        labelText="Nome" 
                        placeholderText="Nome"
                        value={name}
                        setValue={setName}
                    />
                    <Input 
                        type="email" 
                        labelText="E-mail" 
                        placeholderText="E-mail"
                        value={email}
                        setValue={setEmail}
                    />
                    <Input 
                        type="textArea" 
                        labelText="Mensagem" 
                        placeholderText="Digite aqui a sua mensagem"
                        value={mensage}
                        setValue={setMensage}
                    />
                    <FunctionalButton func={()=>{sendMail()}}>Enviar</FunctionalButton>
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