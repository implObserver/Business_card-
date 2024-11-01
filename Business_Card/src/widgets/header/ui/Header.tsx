import { Logo } from "@/shared/ui/logo"
import styles from './styles/Header.module.css'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <span>links</span>
        </div>
    )
}