import {DataWeather} from "../WeatherCityList.tsx";

import {config} from "../../../../config/config.ts";

interface Props {
data: DataWeather
}

const pathUrl = config.pathUrl

export const WeatherCityItem = (props: Props) => {
   // const {data} = props
    const { stacja, temperatura, suma_opadu, cisnienie} = props.data

    return (
                <div className='weather-city-item'>
                    <div className='weather-city-item__img'>
                        <img src={Number(suma_opadu) > 1  ? `${pathUrl}/img/rain.png` : Number(temperatura) > 12 ? `${pathUrl}/img/sun.png` : `${pathUrl}/img/cloudy.png` } alt='weather-icon'/>
                    </div>
                    <div className='weather-city-item__content'>
                        <h2 className='weather-city-item__title'>{stacja}</h2>
                        <p className='weather-city-item__temperature'>Temperatura: {temperatura}°C</p>
                        <p className='weather-city-item__rain'>Deszcz: {Number(suma_opadu) === 0 ? "Nie" : `${suma_opadu}mm` } </p>
                        <p className='weather-city-item__preasure'>Ciśnienie: {Number(cisnienie).toFixed(0)} hPa</p>
                    </div>
                </div>
    )
}