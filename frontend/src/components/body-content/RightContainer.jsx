import NewsfeedContainer from './newsfeed/NewsfeedContainer.jsx'
import NewsSources from './newsfeed/NewsSources.jsx'
import styles from './RightContainer.module.css'


export default function RightContainer({searchContent}){
    return(
        <div className={styles.container}>
            <NewsSources />
            <NewsfeedContainer searchContent={searchContent}/>
        </div>
    )
}