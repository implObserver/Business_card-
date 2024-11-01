import { AboutMe } from "@/widgets/aboutMe"
import { Contacts } from "@/widgets/contacts"
import { Projects } from "@/widgets/projects"
import { Title } from "@/widgets/title"

export const Main = () => {
    return (
        <div>
            <Title></Title>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Contacts></Contacts>
        </div>
    )
}