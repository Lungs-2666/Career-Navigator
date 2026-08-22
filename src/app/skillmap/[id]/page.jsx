'use client'
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import SkillMapFlowVacancie from '@/components/organisms/skillMapFlowVacancie/skillMapFlow/skillmapFlowVacancie';

const Page = () => {

    const { id } = useParams;
    return (
        <main className={styles.main}>
            <SkillMapFlowVacancie  vacancyId={id}></SkillMapFlowVacancie>
        </main>
    )
}

export default Page;