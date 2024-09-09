"use client"
// @flow strict

import TypewriterComponent from "typewriter-effect"

function Type() { 
    return (
        <TypewriterComponent 
            options={{
                strings: [
                    "Étudiant en programmation à Epitech Toulouse",
                    "Développeur full stack web",
                    "Développeur DevOps",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
                wrapperClassName: "text-[#16f2b3]",
            }}
        />
    )
}

export default Type;