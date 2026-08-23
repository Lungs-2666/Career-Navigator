'use client'
import { useEffect, useState } from 'react';
import styles from './page.module.css'
import { useParams } from 'next/navigation';
import LoadingWindow from '@/components/atoms/loadingWindow/loadingWindow';
import Link from 'next/link';

function Page() {

    const { id } = useParams()

    const [vacancie, setVacancie] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        console.log(id, 'id')
        if (id) {
            fetch(`/api/vacancie/${id}`)
                .then((res) => {
                    if (!res.ok) throw new Error('Ошибка загрузки', res.status);
                    return res.json()
                })
                .then((data) => {
                    setVacancie(data)
                    setLoading(false)
                })
                .catch((err) => console.error(err))
            console.log(vacancie, 'vacancie');

        } else {
            throw new Error('id not found')
        }

    }, [id])

    if (loading) return (<LoadingWindow />)
    if(!vacancie.ok) return 


    return (
        <div className={styles.page}>
            <main className={styles.main}>

                <Link
                    href={vacancie.url}
                    className={styles.vacancieCard}>

                    <div className={styles.vacancieCardHeader}>
                        <h2 className={styles.vacancieCardCompany}>{vacancie.company}</h2>
                        <h2 className={styles.vacancieCardTitle}>{vacancie.title}</h2>
                    </div>
                    <div className={styles.vacancieCardMain}>
                        <div className={styles.vacancieCardSalaryContainer}>
                            <p className={styles.vacancieCardSalary}>{`${vacancie.salaryMin} - ${vacancie.salaryMax}`}</p>
                            <p className={styles.vacancieCardCurrency}>{vacancie.currency == 'RUB' ? "₽" : "$"}<span>/мес</span></p>
                        </div>
                        <div className={styles.vacancieCardInfo}>
                            <p className="vacancieCardDate">{vacancie.createdAt}</p>
                            <p className="vacancieCardSource">{vacancie.source}</p>
                        </div>
                    </div>
                    <div className={styles.vacancieCardFooter}>
                        <div className={styles.vacancieCardSkillsContainer}>
                            {vacancie.skillsForCard.map((skill) => {
                                return (
                                    <span
                                        key={skill}
                                        className={styles.vacancieCardSkill}
                                    >{skill}</span>
                                )
                            })}
                        </div>
                    </div>


                </Link>

                <div className={styles.descriptionContainer}>
                    <h2 className={styles.descriptionHeader}>Описание Вакансии</h2>
                    <div className={styles.line}></div>
                    <div className={styles.descriptionBorder}>
                        <p className={styles.description}>{vacancie.description}</p>
                    </div>
                </div>
                <Link
                    href={`/skillmap/${id}`}
                    className={styles.graphLink}
                >
                    <button className={styles.graphBtn}> Граф навыков</button>
                </Link>

            </main>
        </div>
    )

}
export default Page;