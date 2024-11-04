import { scrollToSection } from "@/shared/lib"
import styles from './styles/Links.module.css'

export const Links = () => {
    return (
        <div className={styles.links}>
            <div onClick={() => scrollToSection('title')}>Домой</div>
            <div onClick={() => scrollToSection('about')}>Обо мне</div>
            <div onClick={() => scrollToSection('projects')}>Проекты</div>
            <div onClick={() => scrollToSection('contacts')}>Контакты</div>
        </div>
    )
}