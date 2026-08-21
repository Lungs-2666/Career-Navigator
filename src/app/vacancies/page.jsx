'use client'

import styles from './page.module.css'
import VacanCard from '@/components/atoms/vacanCard/vacanCard';
import { useState, useEffect, use } from 'react';
import VacancieCard from '@/components/atoms/vacancieCard/vacancieCard';

const Page = () => {



    const [inputValue, setInputValue] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [IsLoading, setIsLoading] = useState(false)




    function getData(inputValue) {
        const params = new URLSearchParams();
        if (inputValue == '') {
            alert('Введите текст!!!')
        } else {
            params.append("title", inputValue)
            const query = params.toString();
            console.log(query)
            fetch(`api/vacancies?${query}`)
                .then((res) => {
                    setIsLoading(true)
                    return res.json()
                })
                .then((data) => {
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }


    return (
        <div className={styles.page}
        >


            <header className={styles.vacanciesHeader}>

                <h1 className={styles.headerH1}
                >Vacancies &gt;&gt;</h1>

                <div className={styles.vacanciesSearchContainer}>
                    <div className={styles.vacanciesInputContainer}>
                        <input
                            type="text"
                            className={styles.vacanciesInput}
                            placeholder='🔎 Введите профессию...'
                            onChange={(e) => {
                                setInputValue(e.target.value)
                            }}
                        />
                    </div>

                    <button
                        className={styles.vacanciesInputBtn}
                        onClick={() => { getData(inputValue) }}
                    >Найти</button>
                </div>
            </header>
            <main className={styles.vacanciesMain}>
                {!IsLoading}
                {vacancies.length === 0 ? (
                    <div className={styles.MainPContainer}>
                        <p className={styles.vacanciesMainP}>
                            Здесь пока ничего нет :&lt;</p>
                    </div>) : (
                    vacancies.map((item) => {
                        return (
                            <VacancieCard
                                key={item._id}
                                title={item.title}
                                company={item.company}
                                skills={item.skills}
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
                    })
                )
                }

            </main>
        </div>
    )

}

export default Page;