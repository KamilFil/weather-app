import {DataWeather} from "../../WeatherCityList/WeatherCityList.tsx";
import {ChangeEvent, useState} from "react";

interface Props {
    setFindCity: (city: DataWeather) => void
    data: DataWeather[]
}

export const WeatherHeroContent = ({setFindCity, data}:Props) => {
    const [searchCity, setSearchCity] = useState("")
    const [notFoundCity, setNotFoundCity] = useState<null | string>(null)



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

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNotFoundCity(null)
        setSearchCity(e.target.value)
    }

    return (
            <div className='header-text'>
                <h1 className='header-title'>WeatherApp</h1>
                <p className='header-subtitle'>Sprawdź pogodę w swoim mieście</p>
                <div className='header-search'>
                    <input id="weather-search" name='weather-search' type='text' onChange={handleInputChange}
                           placeholder='Wpisz nazwę miasta'/>
                    <div className='warning'>
                        {notFoundCity ? <p className='warning-text'>{notFoundCity}</p> : ''}
                    </div>
                    <button onClick={handleSearch}>Sprawdź</button>
                </div>
         </div>
        )
}