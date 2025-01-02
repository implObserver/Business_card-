import { useTabContext } from '../lib/context/Context'
import styles from './styles/TabEntity.module.css'

export const TabEntity = () => {
    const context = useTabContext();
    return (
        <div className={styles.tab}>
            <span>{`${context.type} projects`}</span>
            <div
                className={`
            ${styles.arrow} 
            ${context.state
                        ? styles.rotate
                        : ''}
            `}></div>
        </div>
    )
}