'use client'

import styles from './page.module.css'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import VacancieCard from '@/components/atoms/vacancieCard/vacancieCard';
import LoadingWindow from '@/components/atoms/loadingWindow/loadingWindow';
import WavesBgComponent from '@/components/atoms/wavesBg/wavesBgComp';
import { useAccount } from '@/context/accountProvider';
import { supabase } from '@/lib/supabaseClient';


const Page = () => {
    const router = useRouter();
    const { user, loading } = useAccount();

    const [inputValue, setInputValue] = useState('');
    const [vacancies, setVacancies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    async function getUserDirection() {
        console.log("start")
        if (!loading) {
            try {
                console.log("try")
                const params = new URLSearchParams();
                params.append('title', user.direction);
                const query = params.toString();
                console.log(query, 'query')

                const res = await fetch(`api/vacancies?${query}`)
                const data = await res.json()
                setVacancies(data);
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log(loading)
        }



    }






    function getData(inputValue) {
        console.log('start')
        const params = new URLSearchParams();
        if (inputValue == '') {
            alert('Введите текст!!!')
        } else {
            params.append("title", inputValue)
            const query = params.toString();
            console.log(query, 'query')
            fetch(`api/vacancies?${query}`)
                .then((res) => {
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

    useEffect(() => {
        const handleSession = async () => {
            const { data: { session }, error } = await supabase.auth.getSession();

            if (error) {
                console.log(error)
            }

            if (!session) {
                router.push("/login")
            }
            if (session && loading) {
                return <LoadingWindow />
            }
        }

        handleSession();
    }, [router]);

    // if (!user) {
    //     router.push('/login');
    // }


    return (
        <div className={styles.page}
        >

            <WavesBgComponent></WavesBgComponent>
            {isLoading || loading && <LoadingWindow />}
            <div className={styles.pageContainer}>
                <header className={styles.vacanciesHeader}>


                    <h1 className={styles.headerH1}
                    >Вакансии &gt;&gt;</h1>

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