import styles from './styles/MyDescription.module.css'

export const MyDescription = () => {
    return (
        <div className={styles.description}>
            <span>Привет! Меня зовут Вадим и я увлекаюсь написанием сайтов. </span>
            <span>Я мечтаю стать FullStack web-разработчиком,
                поэтому создаю собственные fullstack проекты и этот сайт-визитку.</span>
            <span>Спасибо за внимание!</span>
        </div>
    )
}