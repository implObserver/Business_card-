import { Logo } from "@/shared/ui/logo"
import styles from './styles/Header.module.css'
import { Links } from "@/entities/links"

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo></Logo>
            <Links></Links>
        </div>
    )
}