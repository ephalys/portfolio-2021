import React from 'react';
import Linkedin from "../../icons/icon-linkedin.svg";
import Spotify from "../../icons/icon-spotify.svg";
import Mail from "../../icons/icon-email.svg";
import Git from "../../icons/icon-github.svg";
import {Link, SocialContainer} from "./socialsStyles"
import Icon from "components/icon/icon";

const Socials = () => {

    const links = [
        {
            icon: Linkedin,
            url: "https://www.linkedin.com/in/leon-tran-van/"
        },
        {
            icon: Spotify,
            url: "https://open.spotify.com/user/ephalys?si=UhyBFbz4S7qeLkMAkjliDg"
        },
        {
            icon: Mail,
            url: "nvnrtnl@gmail.com"
        },
        {
            icon: Git,
            url: "https://github.com/ephalys"
        }
    ]

    return (
        <SocialContainer>
            {links.map((link,i) => (
                <Link
                    href={`${link.url}`}
                    target="_blank"
                    rel="noreferrer"
                    key={i}
                >
                    <Icon icon={link.icon} width={20} height={20}/>
                </Link>
            ))}
        </SocialContainer>
    );
};

export default Socials;
