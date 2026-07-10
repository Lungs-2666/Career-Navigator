    'use client'

    import './vacSnip.css';
    import { useState } from "react";
    import Link from "next/link";

    import VacancieCard from "@/components/atoms/vacanCard/vacanCard";

    const test_cards = [
        {
            id: 1,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 2,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 3,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 4,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        }
    ]
    
    const VacanciesSnippets = () => {
        const [vacSnips, setVacSnips] = useState(test_cards); //First 4-5 vacansies
        
        return (
            <div className="vacancies_main">
                <Link className='vac_link' href="/vacancies">Vacancies {'>>'}</Link>

                <div className='vac_cards'>
                    { vacSnips.map((card) => {
                        return (
                            <VacancieCard
                                key={card.id}
                                title={card.title}
                                pay={card.pay}
                                logo={card.logo}
                                link={card.link}
                            />
                        )
                    }) }
                </div>

            </div>
        )
    }

    export default VacanciesSnippets;