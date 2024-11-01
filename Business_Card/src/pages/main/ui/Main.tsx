import { AboutMe } from "@/widgets/aboutMe"
import { Contacts } from "@/widgets/contacts"
import { Projects } from "@/widgets/projects"
import { Title } from "@/widgets/title"
import styles from './styles/Main.module.css'

export const Main = () => {
    return (
        <div className={styles.main}>
            <Title></Title>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    )
}