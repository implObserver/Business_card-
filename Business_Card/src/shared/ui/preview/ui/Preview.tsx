import { usePreviewContext } from "../lib/context/Context"
import styles from './styles/Preview.module.css'

export const Preview = () => {
    const previews = usePreviewContext();

    const srcSetString = previews
        .map(preview => {
            const widthMatch = preview.match(/w_(\d+)\.webp$/);
            const width = widthMatch ? widthMatch[1] : 'auto';
            return `${preview} ${width}w`;
        })
        .join(', ');

    return (
        <div className={styles.preview}>
            <img
                sizes="(max-width: calc(var(--responsive-size)*80)) calc(var(--responsive-size)*50)), min(calc(var(--responsive-size)*80)))"
                srcSet={srcSetString}
                src={previews[previews.length - 1]}
                alt="Описание изображения"

            />
        </div>
    );
};