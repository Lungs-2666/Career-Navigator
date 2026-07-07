    'use client'

    import { useState } from "react";
    import Link from "next/link";

    import Card from "@/components/atoms/card/card";
    
    const VacanciesSnippets = () => {
        const [vacSnips, setVacSnips] = useState([]); //First 4-5 vacansies
        
        return (
            <main>
                <Link href="/vacancies">Vacancies {'>>'}</Link>

                { vacSnips.map((card) => {
                    return (
                        <Card 
                         title={card.title}
                         pay={card.pay}
                         logo={card.logo}
                         link={card.link}
                        />
                    )
                }) }
            </main>
        )
    }

    export default VacanciesSnippets;