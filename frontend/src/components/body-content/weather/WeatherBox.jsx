import sunnyDay from '../../../assets/sunnyDay.png'
import partlyCloudy from '../../../assets/partlyCloudy.png'

import styles from './WeatherBox.module.css'
export default function WeatherBox() {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (
        <div className={`${styles.container} ${styles.weatherDay}`}>
            <div className={styles.daySummaryContainer}>
                <div className={styles.conditions}>
                    <img src={sunnyDay} alt='weather_icon' />
                    <p>Rainy: <span>0%</span></p>
                    <p>Humidity: <span>8%</span></p>
                    <p>Wind: <span>12km/h </span></p>
                </div>
                <div>
                    <h2>24º</h2>
                </div>
            </div>
            <div className={styles.forecast}>
                {days.map(day =>
                    <div>
                        <img src={partlyCloudy} alt='weather_icon'/>
                        <p>Mix: 7º</p>
                        <p>Max: 19º</p>
                    </div>
                )}
            </div>

        </div>
    )
}