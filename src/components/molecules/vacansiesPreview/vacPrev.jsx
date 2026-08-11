    'use client'

    import './vacPrev.css';
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
        // {
        //     id: 4,
        //     title: 'card_test',
        //     pay: '$100/month',
        //     logo: '/logos/logo_1',
        //     link: '/vacancie/1'
        // }
    ]
    
    const VacanciesPreview = () => {
        const [vacPreview, setVacPreview] = useState(test_cards); //First 4-5 vacansies
        
        return (
            <div className="vacancies_preview_main"> 
                <Link href='/vacancies' className='vacancies_preview_link'> Vacancies {">>"} </Link>

                <div className='vacancies_preview_cards'>
                    {vacPreview.map((item) => {
                        return (
                            <VacancieCard 
                                key={item.id}
                                logo={item.logo}
                                title={item.title}
                                pay={item.pay}
                                link={item.link}
                            />
                        );
                    })}
                </div>
            </div>
        )
    }

    export default VacanciesPreview;