import {DataWeather} from "../WeatherCityList/WeatherCityList.tsx";
import { useEffect, useState} from "react";
import {WeatherHeroContent} from "./WeatherHeroContent/WeatherHeroContent.tsx";
import {WeatherHeroItem} from "./WeatherHeroItem/WeatherHeroItem.tsx";
import './WeatherHero.css'
interface Props {
    data: DataWeather[]
}

export const WeatherHero = ({data}: Props) => {
    const [findCity, setFindCity] = useState<DataWeather | undefined>()
    const randomCity: DataWeather = data[Math.floor(Math.random() * data.length)]

    useEffect(() => {
        setFindCity(randomCity)
    }, []);

    return(
    <header className='header'>
        <div className='container'>
            <div className='header-content'>
                <WeatherHeroContent setFindCity={setFindCity} data={data}/>
                <WeatherHeroItem findCity={findCity} setFindCity={setFindCity}/>
            </div>
            </div>
    </header>
)
}