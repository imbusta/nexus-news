import LeftContainer from "./newsfeed/LeftContainer";
import RightContainer from "./newsfeed/RightContainer.jsx";
import styles from './Content.module.css';

export default function Content(){
    return(
        <div className={styles.content}>
            <LeftContainer />
            <RightContainer />
        </div>
    )
}