import {WeatherCityItem} from "./WeatherCityItem.tsx";
import './WeatherCityList.css'
import {useEffect, useState} from "react";
interface Props {
    data: DataWeather[]
}

export interface DataWeather {
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
    const [pageSize, setPageSize] = useState(9)
    const [pageNumber, setPageNumber] = useState(2)
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        setTotalPages(Math.ceil(data.length / pageSize))

    }, []);

    const dataSlice = data.slice((pageSize * pageNumber) - pageSize , pageNumber * pageSize )

    return (<>
        <div className='weather-city-items'>
            {dataSlice.map((item) => (
                <WeatherCityItem data={item} key={item.id_stacji}/>
            ))}


        </div>
    <div className='pagination'>
        <nav>
            <ul>
                <li>
                    <button className={pageNumber === 1 ? 'active' : ''} onClick={() => setPageNumber(1)}>1</button>
                </li>
                <li>
                    <button className={pageNumber === 2 ? 'active' : ''} onClick={() => setPageNumber(2)}>2</button>
                </li>
                <li>
                    <button className={pageNumber === 3 ? 'active' : ''} onClick={() => setPageNumber(3)}>3</button>
                </li>
                <li>
                    <button className={pageNumber === 4 ? 'active' : ''} onClick={() => setPageNumber(4)}>4</button>
                </li>
                <li>
                    <button className={pageNumber === 5 ? 'active' : ''} onClick={() => setPageNumber(5)}>5</button>
                </li>
            </ul>
        </nav>

    </div></>
)
}