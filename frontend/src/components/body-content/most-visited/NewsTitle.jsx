import styles from './NewsTitle.module.css'
export default function NewsTitle({title, url}){
    return(
        <div className={styles.title}>
            <h3><a href={url}>{title}</a></h3>
        </div>
    )
}