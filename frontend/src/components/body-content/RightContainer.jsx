import NewsfeedContainer from './newsfeed/NewsfeedContainer.jsx'
import NewsSources from './newsfeed/NewsSources.jsx'
import styles from './RightContainer.module.css'


export default function RightContainer(){
    return(
        <div className={styles.container}>
            <NewsSources />
            <NewsfeedContainer />
        </div>
    )
}