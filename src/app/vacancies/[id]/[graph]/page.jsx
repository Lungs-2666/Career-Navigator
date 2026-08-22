import styles from './page.module.css';
import SkillmapFlow from '@/components/organisms/skillMapFlow/skillmapFlow';

const Page = () => {


    return (
        <main className={styles.main}>
            <SkillmapFlow></SkillmapFlow>
        </main>
    )
}

export default Page;