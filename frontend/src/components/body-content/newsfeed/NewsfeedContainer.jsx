import NEWS from '../../../utils/news.json'
import styles from './NewsfeedContainer.module.css'

export default function NewsfeedContainer() {
    const DUMMY_NEWS = NEWS.data.data
    console.log(DUMMY_NEWS.data)

    return (
        <div className={styles.container}>
            {DUMMY_NEWS.map(item =>
                <div className={styles.news}>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.url}>go to link...</a>
                </div>
            )}
        </div>
    )
}