import styles from './page.module.css'
import InputVac from '@/components/atoms/inputVac/inputVac';

const Page = () => {

    return (
        <div className={styles.page}
        >


            <header className={styles.vacanciesHeader}>

                <h1 className={styles.headerH1}
                >Vacancies &gt;&gt;</h1>
                <div className={styles.vacanciesMain}>
                    <input type="text" />
                    <button>Найти</button>
                </div>
            </header>
            <main>
                <div>
                    card
                </div>
            </main>
        </div>
    )

}

export default Page;