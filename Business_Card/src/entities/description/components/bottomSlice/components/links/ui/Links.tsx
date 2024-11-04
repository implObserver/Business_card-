import { useDescriptionContext } from '@/entities/description/lib/context/Context';
import styles from './styles/Links.module.css'
import { Link } from 'react-router-dom';

export const Links = () => {
    const context = useDescriptionContext();
    console.log(context.link)
    return (
        <div className={styles.links}>
            <Link className={styles.link} to={context.link}>
                <div className={styles.svg}>

                </div>
            </Link>
            <Link to={context.repository} className={styles.github}>
                <div className={styles.svg}>

                </div>
            </Link>
        </div>
    )
}