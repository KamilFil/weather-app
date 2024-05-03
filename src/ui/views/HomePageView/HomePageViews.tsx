import './HomePageViews.css'
import {useEffect, useState} from "react";
import { WeatherCityList} from "../../components/WeatherCityList/WeatherCityList.tsx";
import {WeatherHero} from "../../components/WeatherHero/WeatherHero.tsx";

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

    return (
        <>
            <div className='wrapper'>
                <img className='wrapper-img' src='/img/weatherapp-bg.jpg'></img>
               <WeatherHero data={data}/>
                <WeatherCityList data={data}/>
            </div>
        </>
    )
}