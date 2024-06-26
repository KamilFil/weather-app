import {DataWeather} from "../../WeatherCityList/WeatherCityList.tsx";
import {config} from "../../../../config/config.ts";

interface Props {
    findCity: DataWeather | undefined
    setFindCity: (city: DataWeather) => void
}

const pathUrl = config.pathUrl

export const WeatherHeroItem = ({findCity}:Props) => {
    return (
            <div className='weather-item'>
                <div className='weather-item-img'>
                    <img
                        src={Number(findCity?.suma_opadu) > 1 ? `${pathUrl}/img/rain.png` : Number(findCity?.temperatura) > 12 ? `${pathUrl}/img/sun.png` : `${pathUrl}/img/cloudy.png`}
                        alt='weather-icon'/>
                </div>
                <div className='weather-item-content'>
                    {findCity ? <h2>{findCity?.stacja}</h2> : ''}
                    {findCity ? <p>Temperatura: {findCity?.temperatura}°C</p> : ''}
                    {findCity ? <p>Deszcz: {Number(findCity?.suma_opadu) === 0 ? "Nie" : `${findCity.suma_opadu}mm` }</p> : ''}
                    {findCity ? <p>Ciśnienie: {Number(findCity?.cisnienie).toFixed(0)} hPa</p> : ''}
                </div>
        </div>
    )

}