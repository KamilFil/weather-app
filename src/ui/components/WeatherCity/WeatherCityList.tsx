import {WeatherCityItem} from "./WeatherCityItem.tsx";
import './WeatherCityList.css'
interface Props {
    data: DataWaether[]
}

export interface DataWaether {
    id_stacji: string,
    stacja: string,
    data_pomiaru: string,
    godzina_pomiaru: string,
    temperatura: string,
    predkosc_wiatru: string,
    kierunek_wiatru: string,
    wilgotnosc_wzgledna: string,
    suma_opadu: string,
    cisnienie: string
}



export const WeatherCityList = (props: Props) => {
    const {data} = props
    const dataSlice = data.slice(0, 9)

    return (
        <div className='weather-city-items'>
            {dataSlice.map((item) => (
                <WeatherCityItem data={item}/>
            ))}
        </div>
    )
}