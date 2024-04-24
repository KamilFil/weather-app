import './HomePageViews.css'
import {ChangeEvent, useEffect, useState} from "react";
import { DataWeather, WeatherCityList} from "../../components/WeatherCity/WeatherCityList.tsx";

export const HomePageView = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [notFoundCity, setNotFoundCity] = useState(null)
    const [findCity, setFindCity] = useState<DataWeather | undefined>()
    const [searchCity, setSearchCity] = useState("")

    const randomCity: DataWeather = data[Math.floor(Math.random() * data.length)]

    useEffect(() => {
        setFindCity(randomCity)
    }, [data]);


    useEffect(() => {
        const fetchData = async () => {

            try {
                setLoading(true)
                const res = await fetch(`https://danepubliczne.imgw.pl/api/data/synop/`)
                const data = await res.json()
                setData(data)
                setLoading(false)
            } catch (e) {
                console.error(e)
            }
        }
        fetchData()
    }, [])

    if(loading) return (<div>Loading...</div>)


    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNotFoundCity(null)
        setSearchCity(e.target.value)
    }

    const handleSearch = () => {
        const city: undefined | DataWeather = data.find((item : DataWeather) => item.stacja.toLowerCase() === searchCity.toLowerCase());
        if(!city) {
            const randomCity = data[Math.floor(Math.random() * data.length)]
            setNotFoundCity('Przykro nam tego miasta nie ma w naszej bazie lub nazwa jest niepoprawna. Spróbuj ponownie.')
            setFindCity(randomCity)
        } else {
            setNotFoundCity(null)
            setFindCity(city)
        }
    }


    return (
        <>
            <div className='wrapper'>
                <img className='wrapper-img' src='/img/weatherapp-bg.jpg'></img>
                <header className='header'>
                    <div className='container'>
                        <div className='header-content'>
                            <div className='header-text'>
                                <h1 className='header-title'>WeatherApp</h1>
                                <p className='header-subtitle'>Sprawdź pogodę w swoim mieście</p>
                                <div className='header-search'>
                                    <input id="weather-search" name='weather-search' type='text' onChange={handleInputChange} placeholder='Wpisz nazwę miasta'/>
                                    <div className='warning'>
                                        {notFoundCity ? <p className='warning-text'>{notFoundCity}</p> : ''}
                                    </div>

                                    <button onClick={handleSearch}>Sprawdź</button>
                                </div>

                            </div>
                            <div className='header-slider-weather'>
                                <div className='header-slider-weather-item'>
                                    <div className='header-slider-weather-item__img'>
                                        <img
                                            src={Number(findCity?.suma_opadu) > 1 ? '/img/rain.png' : Number(findCity?.temperatura) > 12 ? "/img/sun.png" : '/img/cloudy.png'}
                                            alt='weather-icon'/>
                                    </div>
                                    <div className='header-slider-weather-item__content'>
                                        {findCity ? <h2>{findCity?.stacja}</h2> :''}
                                        {findCity ? <p>Temperatura: {findCity?.temperatura}°C</p> : ''}
                                        {findCity ? <p>Deszcz: {findCity?.suma_opadu}</p> : ''}
                                        {findCity ? <p>Ciśnienie: {Number(findCity?.cisnienie).toFixed(0)} hPa</p> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className='weather-city'>
                        <div className='container'>
                            <div className='weather-city-content'>
                                    <WeatherCityList data={data}/>
                            </div>
                        </div>
                </section>
            </div>
        </>
    )
}