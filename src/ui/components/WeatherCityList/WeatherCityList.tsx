import {WeatherCityItem} from "./WeatherCityItem/WeatherCityItem.tsx";
import './WeatherCityList.css'
import {useEffect, useState} from "react";
import {PaginationComponent} from "../Pagination/PaginationComponent/PaginationComponent.tsx";
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
    const pageSize = 9;
    const [pageNumber, setPageNumber] = useState(2)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        setTotalPages(Math.ceil(data.length / pageSize))
    }, [data]);

    const setPage = (pageNumber: number) => {
        setPageNumber(pageNumber)
    }

    const dataSlice = data.slice((pageSize * pageNumber) - pageSize , pageNumber * pageSize )

    return (
        <section className='weather-city'>
            <div className='container'>
                <div className='weather-city-content'>
                    <div className='weather-city-items'>
                        {dataSlice.map((item) => (
                            <WeatherCityItem data={item} key={item.id_stacji}/>
                        ))}
                    </div>
                    <PaginationComponent totalPage={totalPages} pageNumber={pageNumber} setPage={setPage}/>
                </div>
            </div>
        </section>
    )
}