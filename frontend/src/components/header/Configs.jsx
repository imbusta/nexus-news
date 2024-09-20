import Search from './Search'
import styles from './Configs.module.css'
import DUMMY_WEATHER from '../../utils/weather.json'

export default function Configs({handleInput}) {
    const weather = DUMMY_WEATHER.data
    return (
        <div className={styles.container}>
            <Search handleInput={handleInput}/>
            <div className={styles.weather}>
                <span>{weather.current.temp_c}º</span>
                <img src={`http:${weather.current.condition.icon}`} alt='weather_icon' />
            </div>
        </div>
    )
}