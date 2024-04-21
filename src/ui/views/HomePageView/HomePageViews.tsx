import './HomePageViews.css'
import {useEffect, useState} from "react";
import {WeatherCityList} from "../../components/WeatherCity/WeatherCityList.tsx";

export const HomePageView = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


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

    console.log(data)

    return (
        <>
            <div className='wrapper'>
                <img className='wrapper-img' src='/img/weatherapp-bg.jpg'></img>
        <header className='header'>
            <div className='container'>
                <div className='header-content'>
                    <div className='header-text'>
                        <h1 className='header-title'>WatherApp</h1>
                        <p className='header-subtitle'>Sprawdź pogodę w swoim mieście</p>
                        <div className='header-search'>
                            <input type='text' placeholder='Wpisz nazwę miasta'/>
                            <button>Sprawdź</button>
                        </div>
                    </div>
                    <div className='header-slider-weather'>
                        <div className='header-slider-weather-item'>
                            <div className='header-slider-weather-item__img'>
                            <img src='/img/sun.png' alt='weather-icon'/>
                            </div>
                            <div className='header-slider-weather-item__content'>
                            <h2>Warszawa</h2>
                            <p>Temperatura: 25°C</p>
                            <p>Deszcze: Nie</p>
                            <p>Ciśnienie: 1080 hPa</p>
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