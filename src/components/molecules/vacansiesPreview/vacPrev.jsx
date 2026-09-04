'use client'

import './vacPrev.css';
import { useEffect, useState } from "react";
import Link from "next/link";

import VacancieCard from '@/components/atoms/vacancieCard/vacancieCard';

// const test_cards = [
//     {
//         id: 1,
//         title: 'card_test',
//         pay: '$100/month',
//         logo: '/logos/logo_1',
//         link: '/vacancie/1'
//     },
//     {
//         id: 2,
//         title: 'card_test',
//         pay: '$100/month',
//         logo: '/logos/logo_1',
//         link: '/vacancie/1'
//     },
//     {
//         id: 3,
//         title: 'card_test',
//         pay: '$100/month',
//         logo: '/logos/logo_1',
//         link: '/vacancie/1'
//     },
//     {
//         id: 4,
//         title: 'card_test',
//         pay: '$100/month',
//         logo: '/logos/logo_1',
//         link: '/vacancie/1'
//     },
//     {
//         id: 5,
//         title: 'card_test',
//         pay: '$100/month',
//         logo: '/logos/logo_1',
//         link: '/vacancie/1'
//     }
// ];

const VacanciesPreview = () => {
    const [vacPreview, setVacPreview] = useState([]); //First 4-5 vacansies


    useEffect(() => {
        fetch(`api/vacancies`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                return setVacPreview(data);
            })
            .catch((err) => {
                console.error(err);
            })
    },[])


    return (
        <div className="vacancies_preview_main">
            <Link href='/vacancies' className='vacancies_preview_link'> Вакансии {">>"} </Link>

            <div className='vacancies_preview_cards'>
                {vacPreview.map((item) => {
                    return (
                        <VacancieCard
                            key={item._id}
                            title={item.title}
                            company={item.company}
                            skillsForGraph={item.skillsForGraph}
                            skillsForCard={item.skillsForCard}
                            salaryMin={item.salaryMin}
                            salaryMax={item.salaryMax}
                            createdAt={item.createdAt}
                            source={item.source}
                            currency={item.currency}
                            description={item.description}
                            url={item.url}
                            id={item._id}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default VacanciesPreview;