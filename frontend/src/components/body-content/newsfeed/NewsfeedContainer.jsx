import { useEffect, useState } from 'react'
import DUMMY_NEWS from '../../../utils/news.json'
import styles from './NewsfeedContainer.module.css'

export default function NewsfeedContainer({ searchContent }) {
    const [isLoading, setIsLoading] = useState()
    const [news, setNews] = useState([])

    useEffect(() => {
        const getNews = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3055/news?country=us`)
                const data = await response.json()
                console.log(data.isSuccess)
                if (data.isSuccess) {
                    setNews(data.data.data)
                    setIsLoading(false)
                }
                setIsLoading(false)
            } catch (err) {
                console.log(err.message)
            }
        }
        getNews()

    }, [])

    const newsToShow = news.length === 0 ?
        DUMMY_NEWS.data.data.filter(news => news.title.toLowerCase().trim().includes(searchContent.toLowerCase().trim())) :
        news.filter(item => item.title.toLowerCase().trim().includes(searchContent.toLowerCase().trim()))

    return (
        <>
            {isLoading ?
                <p>Loading...</p> :

                <div className={styles.container}>
                    {newsToShow.map((item, index) =>
                        <div className={styles.news} key={index}>
                            <a href={item.url}><h1>{item.title}</h1></a>
                            <p>{item.description}</p>
                        </div>
                    )}
                </div>

            }
        </>

    )
}