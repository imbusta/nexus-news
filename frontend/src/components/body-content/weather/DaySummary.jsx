import { useEffect, useState } from 'react'

import styles from './DaySummary.module.css'
import DUMMY_WEATHER from '../../../utils/weather.json'

export default function DaySummary() {
    const [weather, setWeather] = useState([])
    const [isLoading, setIsLoading] = useState()

    useEffect(() => {
        const getWeather = async () => {
            try {
                setIsLoading(true)
                const response = await fetch(`http://localhost:3055/weather?q='New York'`)
                const data = await response.json()
                if (data.isSuccess) {
                    setWeather(data)
                    setIsLoading(false)
                }
            } catch (e) {
                console.log('Something wrong happened getting the weather: ' + e.message)
                setIsLoading(false)
            }
        }
        getWeather()
    }, [])

    const weatherToShow = weather.length === 0 ? DUMMY_WEATHER : weather

    return (
        <div className={`${styles.daySummaryContainer}`} >
            {isLoading ?
                <p>Loading...</p> :
                <>
                    <div className={styles.conditions}>
                        <img src={`http:${weatherToShow.data.current.condition.icon}`} alt='weather_icon' />
                        <p>Feels like: <span>{weatherToShow.data.current.feelslike_c}º</span></p>
                        <p>Humidity: <span>{weatherToShow.data.current.humidity}%</span></p>
                        <p>Wind: <span>{weatherToShow.data.current.wind_kph}km/h </span></p>
                    </div>
                    <div>
                        <h2>{weatherToShow.data.current.temp_c}º</h2>
                    </div>
                </>
            }
        </div>
    )
}