import React from "react"
import linkedinImg from "../img/if_Asset_18_26432041.png"
import skypeImg from "../img/if_Asset_36_26432101.png"
import whatsappImg from "../img/if_Asset_4_26432321.png"
import googleImg from "../img/if_Asset_5_26432311.png"
import facebookImg from "../img/if_Asset_1_26431991.png"

export default function MediaContacts(props) {
    const array = [
        {
            "name": "linkedin",
            "img": linkedinImg,
            "href": "https://www.linkedin.com/in/tiago-patricio-a7461164/"
        },
        {
            "name": "skype",
            "img": skypeImg,
            "href": "skype:tiago_patricio_90?userinfo"
        },
        {
            "name": "whatsapp",
            "img": whatsappImg,
            "href": "https://api.whatsapp.com/send?phone=351914476422&text=Hello!"
        },
        {
            "name": "google",
            "img": googleImg,
            "href": "https://plus.google.com/u/0/112483735907479406167"
        },
        {
            "name": "facebook",
            "img": facebookImg,
            "href": "https://www.facebook.com/tiago.patricio.16"
        }
    ];

    return <a href={array[props.index].href}><img className="logos" src={array[props.index].img} alt={array[props.index].name}/></a>
}