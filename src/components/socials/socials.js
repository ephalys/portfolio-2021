import React from 'react';
import Linkedin from "../../images/icon-linkedin.svg";
import Spotify from "../../images/icon-spotify.svg";
import Mail from "../../images/icon-email.svg";
import Git from "../../images/icon-github.svg";
import {Link, SocialContainer} from "./socialsStyles"
import colors from "styles/colors";

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
                    <link.icon
                        width={18}
                        height={18}
                        fill={colors.white}
                    />
                </Link>
            ))}
        </SocialContainer>
    );
};

export default Socials;