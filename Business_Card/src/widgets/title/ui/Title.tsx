import styles from './styles/Title.module.css'

export const Title = () => {
    return (
        <div className={styles.title}>
            <span className={styles.firstname}>Вадим</span>
            <span className={styles.secondname}>Ситников</span>
            <span className={styles.fullstack}>Fullstack</span>
            <span className={styles.developer}>WEB-developer</span>
        </div>
    )
}