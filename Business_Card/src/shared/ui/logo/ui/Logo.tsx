import styles from './styles/Logo.module.css'

export const Logo = () => {
    return (
        <div className={styles.logo}>
            <span className={styles.first_letter}>V</span>
            <span className={styles.second_letter}>S</span>
        </div>
    )
}