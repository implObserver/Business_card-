import { BottomSlice } from "../components/bottomSlice"
import { Links } from "../components/bottomSlice/components/links"
import { TopSlice } from "../components/topSlice"
import styles from './styles/Description.module.css'

export const Description = () => {
    return (
        <div className={styles.description}>
            <BottomSlice></BottomSlice>
            <TopSlice></TopSlice>
        </div>
    )
}