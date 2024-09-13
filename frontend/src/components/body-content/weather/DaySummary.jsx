// import { useEffect, useState } from 'react'

import styles from './DaySummary.module.css'
import DUMMY_WEATHER from '../../../utils/weather.json'

export default function DaySummary() {
    // const [day, isDay] = useState(false)
    // const [weather, setWeather] = useState()
    // const [isLoading, setIsLoading] = useState(false)
    const weather = DUMMY_WEATHER.data
    const isLoading = false 

    // useEffect(() => {
    //     const getWeather = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:3055/weather?q='New York'`)
    //             const data = await response.json()
    //             setWeather(data.data)
    //             setIsLoading(false)
    //         } catch (e) {
    //             console.log('Something wrong happened getting the weather: ' + e.message)
    //         }
    //     }
    //     getWeather()
    // }, [])



    return (
        <div className={styles.daySummaryContainer}>
            {isLoading ?
                <p>Loading...</p> :
                <>
                    <div className={styles.conditions}>
                        <img src={`http:${weather.current.condition.icon}`} alt='weather_icon' />
                        <p>Feels like: <span>{weather.current.feelslike_c}º</span></p>
                        <p>Humidity: <span>{weather.current.humidity}%</span></p>
                        <p>Wind: <span>{weather.current.wind_kph}km/h </span></p>
                    </div>
                    <div>
                        <h2>{weather.current.temp_c}º</h2>
                    </div>
                </>
            }
        </div>
    )
}