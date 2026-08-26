import styles from './not-found.module.css'
import Link  from 'next/link';
const NotFound = () => {

    return (
        <div className={styles.notFoundPage}>
            <p className={styles.p}>Ничего не нашлось</p>
            <Link href={'/'}>Главная</Link>
        </div>
    )

}
export default NotFound;