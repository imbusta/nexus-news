// 
import styles from './Forecast.module.css'
import DUMMY_FORECAST from '../../../utils/forecast.json'

export default function Forecast() {
    // const [isLoading, setIsLoading] = useState(true)
    // const [forecast, setForecast] = useState()
    const forecast = DUMMY_FORECAST.data.forecast.forecastday
    const isLoading = false

    // useEffect(() => {
    //     const getForecast = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:3055/weather/forecast?q="New York"&days=7`)
    //             const data = await response.json()
    //             setForecast(data.data.forecast.forecastday)
    //             setIsLoading(false)
    //         }catch(e)
    //         {
    //             console.log('Failed to fetch forecast: ' + e.message)
    //         }
    //     }
    //     getForecast()
    // }, [])

    return (
        <div className={styles.forecast}>
            {isLoading ?
                <p>Loading...</p> :
                <>
                    {
                        forecast.map((day, index) =>
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