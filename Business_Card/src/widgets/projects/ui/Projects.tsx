import { Title, TitleContext } from "@/shared/ui/title";
import { projects } from "@/shared/lib";
import { Project, ProjectContext } from "../components/project";
import styles from './styles/Projects.module.css'

export const Projects = () => {
    const titleContext: string = 'Проекты';

    const fill = () => {
        return Object.entries(projects).map(([key, project]) => (
            <div className={styles.project} key={key}>
                <ProjectContext.Provider value={project}>
                    <Project></Project>
                </ProjectContext.Provider>
                <div className={styles.recent_line}></div>
            </div>
        ));
    }
    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.title}>
                <TitleContext.Provider value={titleContext}>
                    <Title></Title>
                </TitleContext.Provider>
            </div>
            {fill()}
        </div>
    )
}