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
                sizes="(max-width: 1318px) 50vw, min(1318px,40vw)"
                srcSet={srcSetString}
                src={previews[previews.length - 1]}
                alt="Описание изображения"
            />
        </div>
    );
};