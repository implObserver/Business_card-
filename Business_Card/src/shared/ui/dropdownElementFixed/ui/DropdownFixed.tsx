import styles from './styles/DropdownFixed.module.css'
import { useDropdownContext } from '../lib/context/Context.';

export const DropdownFixed = ({ children }) => {
    const status = useDropdownContext();

    return (
        <div className={styles.dropdown}>
            <div className={`
                ${styles.content} 
                ${status.state ? styles.open : ''}
                ${status.margin ? styles.margin : ''}`}
            >
                {children}
            </div>
        </div>
    )
}