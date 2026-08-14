import styles from './page.module.css'

const Page = () => {

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
            <main   className={styles.vacanciesMain}>
                <div>
                    card
                </div>
            </main>
        </div>
    )

}

export default Page;