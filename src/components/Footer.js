import React from "react"
import MediaContacts from "../components/MediaContacts";

export default function Footer() {

    return (
        <div className="bg-bottom clear">
            <div className="center">
                <p className="footer">Developed by: <a id="mail" href="mailto:tiagoudp@gmail.com">Tiago Patricio</a></p>
                <div className="footer">
                    <MediaContacts index="0" /> 
                    <MediaContacts index="1" />
                    <MediaContacts index="2" />
                    <MediaContacts index="3" />
                    <MediaContacts index="4" />
                </div>
            </div>
        </div>
        
        
    )
}
