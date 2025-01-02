import { projects } from "@/shared/lib";
import { Project, ProjectContext } from "../components/project";
import styles from './styles/Tab.module.css'
import { useCustomState } from "@/shared/lib/helper/hooks/useCustomState";
import { DropdownContext, DropdownFixed } from "@/shared/ui/dropdownElementFixed";
import { TabContext, TabEntity } from "@/entities/tabEntity";

export const Tab = ({ type }: { type: string }) => {
    const typedProjects = Object.entries(projects);
    const filteredProjects = typedProjects.filter(project => project[1].type.includes(type));
    const focus = useCustomState(false);

    const dropdownContext: DropdownContextType = {
        state: focus.getState(),
        margin: false,
    }

    const tabContext: TabContext = {
        state: focus.getState(),
        type: type
    }

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        focus.toggle()
    }

    const fill = () => {
        return filteredProjects.map(([key, project]) => (
            <div className={styles.project} key={key}>
                <ProjectContext.Provider value={project}>
                    <Project></Project>
                </ProjectContext.Provider>
                <div className={styles.recent_line}></div>
            </div>
        ));
    }
    return (
        <div id={`${type}`} className={`${styles.container} ${type}`}>
            <div onClick={clickHandler} className={styles.toggle}>
                <TabContext.Provider value={tabContext}>
                    <TabEntity></TabEntity>
                </TabContext.Provider>
            </div>
            <DropdownContext.Provider value={dropdownContext}>
                <DropdownFixed>
                    <div className={styles.projects}>
                        {fill()}
                    </div>
                </DropdownFixed>
            </DropdownContext.Provider>
        </div >
    )
}