import {DataWaether} from "./WeatherCityList.tsx";

interface Props {
data: DataWaether
}





export const WeatherCityItem = (props: Props) => {
   // const {data} = props
    const {id_stacji, stacja, temperatura, suma_opadu, cisnienie} = props.data

    return (
                <div className='weather-city-item' key={id_stacji}>
                    <div className='weather-city-item__img'>
                        <img src={Number(suma_opadu) > 1  ? '/img/rain.png' : Number(temperatura) > 12 ? "/img/sun.png" : '/img/cloudy.png' } alt='weather-icon'/>
                    </div>
                    <div className='weather-city-item__content'>
                        <h2 className='weather-city-item__title'>{stacja}</h2>
                        <p className='weather-city-item__temperature'>Temperatura: {temperatura}°C</p>
                        <p className='weather-city-item__rain'>Deszcz: {suma_opadu}</p>
                        <p className='weather-city-item__preasure'>Ciśnienie: {Number(cisnienie).toFixed(0)} hPa</p>
                    </div>
                </div>
    )
}