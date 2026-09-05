'use client'

import './vacPrev.css';
import { useEffect, useState } from "react";
import Link from "next/link";
import SkeletonCard from '../skeletonCards/skeletonCards';

import VacancieCard from '@/components/atoms/vacancieCard/vacancieCard';



const VacanciesPreview = () => {
    const [vacPreview, setVacPreview] = useState([]); //First 4-5 vacansies
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`api/vacancies`)
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch data')
                return res.json();
            })
            .then((data) => {
                setLoading(false)
                return setVacPreview(data);
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])


    if (loading) {
        return (
            <div className="vacancies_preview_main">
                <Link href='/vacancies' className='vacancies_preview_link'> Загрузка {">>"} </Link>

                <div className='vacancies_preview_cards'>
                    {[1, 2, 3, 4, 5].map((item) => {
                        return (
                            <SkeletonCard loading={loading} key={item} />
                        );
                    })}
                </div>
            </div>
        )
    }


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