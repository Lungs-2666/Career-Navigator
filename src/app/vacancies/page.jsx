'use client'

import styles from './page.module.css'
import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import VacancieCard from '@/components/atoms/vacancieCard/vacancieCard';
import LoadingWindow from '@/components/atoms/loadingWindow/loadingWindow';
import WavesBgComponent from '@/components/atoms/wavesBg/wavesBgComp';
import { useAccount } from '@/context/accountProvider';


const Page = () => {
    const router = useRouter();
    const { user, loading } = useAccount();

    const [inputValue, setInputValue] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // const [userDirection, setUserDirection] = useState(user.direction);

    // console.log(user.direction);
    // setUserDirection(user.direction);


    async function getUserDirection() {
        if (!loading) {
            try {
                const params = new URLSearchParams();
                params.append('title', user.direction);
                const query = params.toString();
                // console.log(query, 'query');

                // console.log(userDirection);
                const res = await fetch(`api/vacancies?${query}`)
                const data = await res.json()
                setVacancies(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }



    }

    if (!user) {
        console.log('No logged session');
        router.push('/login');
    }



    function getData(inputValue) {
        const params = new URLSearchParams();
        if (inputValue == '') {
            alert('Введите текст!!!')
        } else {
            params.append("title", inputValue)
            const query = params.toString();
            console.log(query, 'query')
            fetch(`api/vacancies?${query}`)
                .then((res) => {
                    setIsLoading(true);
                    return res.json();
                })
                .then((data) => {
                    setIsLoading(false);
                    return setVacancies(data);
                })
                .catch((err) => {
                    console.error(err);
                })
        }
    }

    useEffect(() => {
        getUserDirection();
    }, [])





    return (
        <div className={styles.page}
        >

            <WavesBgComponent></WavesBgComponent>
            {isLoading || loading && <LoadingWindow />}
            <div className={styles.pageContainer}>
                <header className={styles.vacanciesHeader}>


                    <h1 className={styles.headerH1}
                    >Vacancies &gt;&gt;</h1>

                    <div className={styles.vacanciesSearchContainer}>
                        <div className={styles.vacanciesInputContainer}>
                            <p className={styles.inpP}>🔎</p>
                            <input
                                type="text"
                                className={styles.vacanciesInput}
                                placeholder='Введите профессию...'
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
                    {vacancies.length === 0 ? (
                        <div className={styles.MainPContainer}>
                            <p className={styles.vacanciesMainP}>
                                Ничего не нашлось... :&lt;</p>
                        </div>) : (
                        vacancies.map((item) => {
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
                        })
                    )
                    }

                </main>
            </div>
        </div>
    )

}

export default Page;