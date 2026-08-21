    import styles from './page.module.css';
    // import NewFlow from '@/components/lib_test/flow';
    import SkillmapFlow from '@/components/organisms/skillMapFlow/skillmapFlow';

    const Page = () => {
        return (
            <main className={styles.main}>
                {/* <NewFlow /> */}
                <SkillmapFlow />
            </main>
        )
    }

    export default Page;