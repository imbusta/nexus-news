import NewsfeedContainer from './newsfeed/NewsfeedContainer.jsx'
import styles from './RightContainer.module.css'

export default function RightContainer(){
    return(
        <div className={styles.container}>
            <NewsfeedContainer />
        </div>
    )
}