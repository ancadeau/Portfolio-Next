"use client"

import TypewriterComponent from "typewriter-effect"
import { useTranslation } from "@/lib/translation";

function Type() { 
    const { t, language } = useTranslation();
    
    const frenchStrings = [
        "Diplômé Expert en Ingénierie Logicielle",
        "Développeur Backend & DevOps",
        "Product Owner Agile",
    ];
    
    const englishStrings = [
        "Software Engineering Expert Graduate",
        "Backend & DevOps Developer",
        "Agile Product Owner",
    ];
    
    const strings = language === 'en' ? englishStrings : frenchStrings;
    
    return (
        <TypewriterComponent 
            options={{
                strings: strings,
                autoStart: true,
                loop: true,
                deleteSpeed: 20,
                wrapperClassName: "text-[#16f2b3]",
            }}
        />
    )
}

export default Type;