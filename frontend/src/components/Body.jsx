import LeftContainer from "./body-content/LeftContainer.jsx";
import RightContainer from "./body-content/RightContainer.jsx";
import styles from './Body.module.css';

export default function Body(){
    return(
        <div className={styles.content}>
            <LeftContainer />
            <RightContainer />
        </div>
    )
}