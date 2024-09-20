import { useSelector } from 'react-redux'


import styles from './WeatherBox.module.css'
import DaySummary from './DaySummary'
import Forecast from './Forecast'


export default function WeatherBox() {
    const isNight = useSelector((state) => {return state.theme.isNight})
    console.log(isNight)


    return (
        <div className={`${styles.container} ${isNight ? styles.weatherNight : styles.weatherDay}`}>
            <DaySummary />
            <Forecast />
        </div>
    )
}