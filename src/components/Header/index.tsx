import { useState } from "react";

import Link from "next/link";

import { FaBars } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

import { Wrapper, Menu, ButtonToggleMenuMobile } from "./style";

interface HeaderProps {
    home: boolean
}

export default function Header({ home }: HeaderProps) {
    let isHome = home || false;

    const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false);

    const handleOpenMenuMobile = () => {
        setIsOpenMenuMobile(prevState => !prevState)
    }

    return (
        <Wrapper isHome={isHome}>
            <img src="/logotipo_horizontal_bege.png" alt="Logo Angela Reys Fotografia" />
            <div>
                <ButtonToggleMenuMobile onClick={handleOpenMenuMobile}>
                    <FaBars/>
                </ButtonToggleMenuMobile>
            </div>
            <Menu isHome={isHome} isOpenMenuMobile={isOpenMenuMobile}>
                <ButtonToggleMenuMobile close={true} onClick={handleOpenMenuMobile}>
                    <MdClose/>
                </ButtonToggleMenuMobile>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/galeria/todos">Galeria</Link>
                </li>
                <li>
                    <Link href="/fotografa">A fotógrafa</Link>
                </li>
                <li>
                    <Link href="/contato">Contato</Link>
                </li>
            </Menu>
        </Wrapper>
    );
}
