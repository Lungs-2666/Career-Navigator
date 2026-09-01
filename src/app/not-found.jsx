import styles from './not-found.module.css'
import Link from 'next/link';
const NotFound = () => {

    return (
        <div className={styles.notFoundPage}>
            <div className={styles.container}>
                <h2 className={styles.h2}>Ooops!</h2>
                <h1 className={styles.errorH1}>4<span className={styles.zero}>0</span>4</h1>
                <p className={styles.p}>Ничего не нашлось...</p>
                <svg width="780" height="660" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                    <line x1="30" y1="10" x2="30" y2="140" stroke="#406354" strokeWidth="1.5" />
                    <line x1="30" y1="140" x2="260" y2="140" stroke="#406354" strokeWidth="1.5" />
                    <path d="M30 120 C80 120 90 80 140 80 C190 80 200 110 260 110" stroke="#c0b395" strokeWidth="2" fill="none" />
                    <path d="M30 100 C80 100 90 60 140 60 C190 60 200 90 260 90" stroke="#c0b395" strokeWidth="2" fill="none" />
                    <path d="M30 80 C80 80 90 40 140 40 C190 40 200 70 260 70" stroke="#c0b395" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <Link href={'/'} className={styles.link}>Вернуться на главную</Link>
        </div>
    )

}
export default NotFound;