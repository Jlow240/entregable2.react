import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Loader from './components/Loader'
import WeatherCard from './components/WeatherCard'

const API_KEY1 = "063aa24ef37683aecd251193be03d58c"
const API_KEY2 = "bd375fbc9c594a3799abbbbed8808a2b"

function App() {

    //Coordenadas obtenidas por la peticion de navigator
    const [coords, setCoords] = useState(0)

    //estado para guardar todo el arreglo del clima
    const [weather, setWeather] = useState()

    // temperaturas
    const [temps, setTemps] = useState()

    //estado para saber si son celsius
    const [isCelsius, setIsCelsius] = useState(true)

    //estado para guardar la fecha
    const [date, setDate] = useState()


    const success = (e) => {
        const newCoords = {
            lat: e.coords.latitude,
            lon: e.coords.longitude
        }
        setCoords(newCoords)
    }

    const changeUnitTemp = () => setIsCelsius(!isCelsius)

    // useEffect para que la peticion de la geolocalizacion solo se pida una vez
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success)
    }, [])

    // UseEffect para hacer la peticion del clima con axios
    useEffect(() => {
        if (coords) {
            const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY1}`
            axios.get(URL)
                .then(res => {
                    setTimeout(() => {
                    setWeather(res.data)
                    const celsius = (res.data.main.temp - 273.15).toFixed(2);
                    const fahrenheit = (celsius * (9 / 5) + 32).toFixed(2);
                    const newTemps = {celsius,fahrenheit}
                    setTemps(newTemps)
                }, 3000)
            })
                .catch(err => console.log(err))
        }
    }, [coords])


    //useEffect para hacer peticion de la fecha
/* useEffect(() => {
        const URL = `https://timezone.abstractapi.com/v1/current_time?api_key=${API_KEY2}&location=lat=${coords.lat}&lon=${coords.lon}`
        axios.get(URL)
        .then((res => setDate(res.data.datetime)))
        .catch(err => console.log(err))
    }, [coords]) */
    
    return (
        <div className="App bg-dark-cream font-quick font text-[1rem]">
            {
                weather ? (
                    <WeatherCard
                        weather={weather}
                        temps={temps}
                        changeUnitTemp={changeUnitTemp}
                        isCelsius={isCelsius}
                        date={date}
                    />
                ) : <Loader />
            }
        </div>
    )
}

export default App
