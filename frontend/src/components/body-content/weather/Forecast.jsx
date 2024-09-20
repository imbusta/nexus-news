import { useState, useEffect } from 'react'
import styles from './Forecast.module.css'
import DUMMY_FORECAST from '../../../utils/forecast.json'

export default function Forecast() {
    const [isLoading, setIsLoading] = useState(true)
    const [forecast, setForecast] = useState([])

    useEffect(() => {
        const getForecast = async () => {
            try {
                const response = await fetch(`/weather/forecast?q="New York"&days=7`)
                const data = await response.json()
                if (data.isSuccess) {
                    setForecast(data.data.forecast.forecastday)
                    setIsLoading(false)
                }
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                console.log('Failed to fetch forecast: ' + e.message)
            }
        }
        getForecast()
    }, [])

    const forecastToShow = forecast.length === 0 ? DUMMY_FORECAST.data.forecast.forecastday : forecast

    return (
        <div className={styles.forecast}>
            {isLoading ?
                <p>Loading...</p> :
                <>
                    {
                        forecastToShow.map((day, index) =>
                            <div key={index}>
                                <img src={`http:${day.day.condition.icon}`} alt='weather_icon' />
                                <p><span>Min:</span></p>
                                <p>{day.day.mintemp_c}º</p>
                                <p><span>Max:</span></p>
                                <p>{day.day.mintemp_c}º</p>
                            </div>
                        )
                    }
                </>
            }
        </div>
    )
}