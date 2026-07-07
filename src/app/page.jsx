    import styles from "./page.module.css";

    import VacanciesSnippets from "@/components/molecules/vacansiesSnippet/vacSnip";
    import ResourcesSnippets from "@/components/molecules/resourcesSnippet/resourSnip";
    import NavBar from "@/components/molecules/navBar/navBar";

    const Home = () => {
        return (
            <div className={styles.page}>
                <NavBar />

                <main className={styles.main}>
                    <VacanciesSnippets />
                    <ResourcesSnippets />
                </main>
            </div>
        );
    }

    export default Home;