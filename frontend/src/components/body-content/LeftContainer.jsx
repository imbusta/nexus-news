import styles from './LeftContainer.module.css'
import MostVisited from './most-visited/MostVisited'
import WeatherBox from './weather/WeatherBox'

export default function LeftContainer(){
    return (
        <div className={styles.container}>
            <WeatherBox />
            <MostVisited />
        </div>
    )
}