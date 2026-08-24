    import styles from "./page.module.css";

    import VacanciesPreview from "@/components/molecules/vacansiesPreview/vacPrev";
    import SkillmapPreview from "@/components/molecules/skillmapPreview/skillmapPrev";
    import AccountPreview from "@/components/molecules/accountPreview/accPrev";
    import WavesBgComponent from "@/components/atoms/wavesBg/wavesBgComp";


    const Home = () => {
        return (
            <div className={styles.page}>
                <WavesBgComponent />

                <main className={styles.main}>
                    <div className={styles.snip_group}>
                        <VacanciesPreview />
                        <SkillmapPreview />
                        <AccountPreview />
                    </div>

                    {/* <div className={styles.snip_group_adaptive}>
                        <VacanciesPreview />
                        <SkillmapPreview />
                        <AccountPreview />
                    </div> */}
                </main>
            </div>
        );
    }

    export default Home;
