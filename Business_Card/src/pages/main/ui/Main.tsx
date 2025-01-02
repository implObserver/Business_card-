import { AboutMe } from "@/widgets/aboutMe"
import { Contacts } from "@/widgets/contacts"
import { Projects } from "@/widgets/projects"
import { Title as MainTitle } from "@/widgets/title"
import styles from './styles/Main.module.css'
import { Tab } from "@/widgets/tab"
import { Title, TitleContext } from "@/shared/ui/title"

export const Main = () => {
    return (
        <div className={styles.main}>
            <MainTitle></MainTitle>
            <AboutMe></AboutMe>
            <div className={styles.title}>
                <TitleContext.Provider value={'Проекты'}>
                    <Title></Title>
                </TitleContext.Provider>
            </div>
            <Tab type="Vanilla"></Tab>
            <Tab type="React"></Tab>
            <Tab type="FullStack"></Tab>
            <Contacts></Contacts>
        </div>
    )
}