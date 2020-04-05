import React from "react"
import imagem from "../../img/fotoPerfil1.png";

export default function Home() {
    var obj = require("../../data/presentation.json")
    var overview = obj.overview.map((item) => (<p key={item}>{item}</p>) )
    var psItems = obj.primarySkills.map((item) => (<li key={item}>{item}</li>) )
    var osItems = obj.otherSkills.map((item) => (<li key={item}>{item}</li>) )

    return (
        <div className="center">
            <div className="top-section">
                <img className="left" src={imagem} alt='' />
                <div className="right overview">
                <h1>Overview</h1>
                 {overview}
                </div>
            </div>

            <div className="clear middleContainer">
                <div className="subContainer">
                <h2>Primary Skills</h2>
                <ul>
                    {psItems}
                </ul>
                </div>

                <div className="subContainer">
                <h2>Other Skills</h2>
                <ul>
                    {osItems}
                </ul>
                </div>
            </div>

        </div>
    )
}
