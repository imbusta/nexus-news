import styles from './LeftContainer.module.css'
import ToDosBox from './todos/ToDosBox'
import WeatherBox from './weather/WeatherBox'

export default function LeftContainer(){
    return (
        <div className={styles.container}>
            <WeatherBox />
            <ToDosBox />
        </div>
    )
}