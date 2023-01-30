import React from 'react'
import "./styles/WeatherCard.css"
import WeatherDate from './WeatherDate'

const WeatherCard = ({ weather, temps, isCelsius, changeUnitTemp, date }) => {


    return (
        <article className='weatherCard bg-cream text-dark-brown'>

            {/*
                <div class="container">
                    <form> <input type="text" placeholder="Search for a city" autofocus />
                        <button className='bg-sad-green' type="submit">lets See</button> <span class="msg"></span> </form>
                </div>
                <hr />*/}
            <section class="">
                <h2 className='weatheCard__palce flex text-[24px] justify-center items-center'><i class='bx bx-current-location'></i>{weather?.name}, {weather?.sys.country}</h2>
                <h2 className='weatherCard__title '><WeatherDate /></h2>
            </section>

            <section>
                <div className='weatherCard__img'>
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="icon weather" />
                </div>
            </section>

            <h3 className='weatherCard__temp'>{isCelsius ? temps?.celsius + "°C" : temps?.fahrenheit + "°F"}</h3>
            <br />

            <section className='dataCard place-items-end text-dark-brown'>
                <ul className='weatherCard__list text-left'>
                    <li><span>Weather descripcion: </span> {weather?.weather[0].main}, {weather?.weather[0].description}</li>
                    <li><span>Wind Speed: </span>{weather?.wind.speed} m/sec </li>
                    <li><span>Clouds: </span>{weather?.clouds.all} %</li>
                    <li><span>Pressure: </span>{weather?.main.pressure} hPa</li>
                </ul>
                <button className='weatherCard__btn bg-dark-brown' onClick={changeUnitTemp}>&deg;C / &deg;F</button>
            </section>
        </article>

    )
}

export default WeatherCard