import styles from './styles/Title.module.css'

export const Title = () => {
    return (
        <div id="title" className={styles.title}>
           
            <span className={styles.firstname}>Вадим</span>
            <span className={styles.secondname}>Ситников</span>
            <div className={styles.profession}>
                <span className={styles.fullstack}>Fullstack</span>
                <span className={styles.developer}>WEB-developer</span>
            </div>
        </div>
    )
}