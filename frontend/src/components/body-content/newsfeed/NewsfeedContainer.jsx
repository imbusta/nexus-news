// import { useState } from 'react'
import NEWS from '../../../utils/news.json'
import styles from './NewsfeedContainer.module.css'

export default function NewsfeedContainer({ searchContent }) {
    const newsToShow = NEWS.data.data.filter(news => news.title.toLowerCase().includes(searchContent.toLowerCase()))
    return (
        <div className={styles.container}>
            {newsToShow.map((item, index) =>
                <div className={styles.news} key={index}>
                    <a href={item.url}><h1>{item.title}</h1></a>
                    <p>{item.description}</p>
                </div>
            )}
        </div>
    )
}