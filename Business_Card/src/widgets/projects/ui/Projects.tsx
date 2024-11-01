import { Title, TitleContext } from "@/shared/ui/title";
import { projects } from "@/shared/lib";
import { Project, ProjectContext } from "../components/project";
import styles from './styles/Projects.module.css'

export const Projects = () => {
    const titleContext: string = '2.Проекты';
    const fill = () => {
        return Object.entries(projects).map(([key, project]) => (
            <div className={styles.project} key={key}>
                <ProjectContext.Provider value={project}>
                    <Project></Project>
                </ProjectContext.Provider>
            </div>
        ));
    }
    return (
        <div className={styles.projects}>
            <TitleContext.Provider value={titleContext}>
                <Title></Title>
            </TitleContext.Provider>
            {fill()}
        </div>
    )
}