import styles from './WeatherBox.module.css'
import DaySummary from './DaySummary'
import Forecast from './Forecast'


export default function WeatherBox() {
    return (
        <div className={`${styles.container} ${styles.weatherDay}`}>
            <DaySummary />
            <Forecast />
        </div>
    )
}