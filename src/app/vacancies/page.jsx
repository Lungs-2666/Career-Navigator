

import styles from './page.module.css'
import VacancieCard from '@/components/atoms/vacanCard/vacanCard';


const Page = () => {


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
        },
        {
            id: 5,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 6,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 7,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        },
        {
            id: 8,
            title: 'card_test',
            pay: '$100/month',
            logo: '/logos/logo_1',
            link: '/vacancie/1'
        }
    ]

    return (
        <div className={styles.page}
        >


            <header className={styles.vacanciesHeader}>

                <h1 className={styles.headerH1}
                >Vacancies &gt;&gt;</h1>

                <div className={styles.vacanciesSearchContainer}>
                    <div className={styles.vacanciesInputContainer}>
                        <input type="text" className={styles.vacanciesInput} placeholder='🔎 Введите профессию...' />
                    </div>

                    <button className={styles.vacanciesInputBtn}>Найти</button>
                </div>
            </header>
            <main className={styles.vacanciesMain}>
                {test_cards.map((item) => {
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
            </main>
        </div>
    )

}

export default Page;