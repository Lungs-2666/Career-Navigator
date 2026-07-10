    import styles from "./page.module.css";

    import VacanciesSnippets from "@/components/molecules/vacansiesSnippet/vacSnip";
    import ResourcesSnippets from "@/components/molecules/resourcesSnippet/resourSnip";
    import NavBar from "@/components/molecules/navBar/navBar";

    const Home = () => {
        return (
            <div className={styles.page}>

                <main className={styles.main}>
                    <NavBar />
                    
                    <div className={styles.snip_group}>
                        <VacanciesSnippets />
                        <ResourcesSnippets />
                    </div>
                </main>
                
            </div>
        );
    }

    export default Home;