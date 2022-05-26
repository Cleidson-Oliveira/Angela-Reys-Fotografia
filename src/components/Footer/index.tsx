import { Wrapper, SocialIcons } from "./style";

import { FaFacebook, FaInstagram, FaWhatsapp, FaPinterest } from "react-icons/fa";
import { ImPinterest2 } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function Footer() {
    return (
        <Wrapper>
            <ul>
                <li>
                    <SocialIcons 
                        target="_blank" 
                        href="https://www.facebook.com/search/top?q=angelareysfotografia"
                        colorIcon={"blue"}
                    >
                        <FaFacebook />
                    </SocialIcons>
                </li>
                <li>
                    <SocialIcons 
                        target="_blank" 
                        href="https://www.instagram.com/angelareysfotografia/"
                        colorIcon={"#f033c1"}
                    >
                        <FaInstagram />
                    </SocialIcons>
                </li>
                <li>
                    <SocialIcons 
                        target="_blank" 
                        href="https://api.whatsapp.com/message/LAYELHTIOCOQI1"
                        colorIcon={"#34af23"}
                    >
                        <FaWhatsapp />
                    </SocialIcons>
                </li>
                <li>
                    <SocialIcons 
                        target="_blank" 
                        href="https://br.pinterest.com/angelareysfotografia/_saved/"
                        colorIcon={"red"}
                    >
                        <ImPinterest2 />
                    </SocialIcons>
                </li>
            </ul>
        </Wrapper>
    )
}