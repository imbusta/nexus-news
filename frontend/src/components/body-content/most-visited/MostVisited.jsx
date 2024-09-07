import styles from './MostVisited.module.css'
import NewsTitle from './NewsTitle.jsx'
import DUMMY_NEWS from '../../../utils/news.json'

const top_news = DUMMY_NEWS.data.data.filter((item, index) => index >= 10 && index < 15)

export default function MostVisited() {
    return (
        <>
            <div className={styles.container}>
                <h1>Most Visited</h1>
                <div className={styles.newsTitle}>
                    {top_news.map((item, index) =>
                        <NewsTitle
                            title={item.title}
                            url={item.url}
                        />
                    )}
                </div>
            </div>

        </>
    )
}