import React, { useEffect, useState } from 'react'
import '../AStyles/Weather.css'

import { BiStreetView } from 'react-icons/bi'
import { TbTemperatureCelsius } from 'react-icons/tb'
import axios from 'axios'

const Weather = () => {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Lahore")

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=95bdf6a46f6c25c109a7b019cce5fd2b`)
                // const data = res.data;
                // const main = data.main;
                setCity(res.data.main)
            } catch (error) {
                setCity(null)
            }
        }
        fetchApi()
    }, [search])
    var newTime = new Date().toLocaleTimeString();

    const [time, setTime] = useState(newTime)

    const updateTime = () => {
        setTime(newTime = new Date())
    }

    setInterval(updateTime, 1000);
    clearInterval(updateTime, 1000);
    var newDate = new Date().toLocaleDateString();

    const [date, setDate] = useState(newDate)

    const updateDate = () => {
        setDate(newDate = new Date())
    }

    setInterval(updateDate, 1000);
    clearInterval(updateDate, 1000);

    return (
        <div className='weather_main_div'>

            <div className="app_weather_heading">
                My Weather
            </div>

            <div className="box_weather">

                <div className="input_search_w">
                    <input
                        type="search"
                        value={search}
                        placeholder='Search a City'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                {(!city || search == "")
                    ?
                    (
                        <div className='error_weather_w'>No City Found</div>
                    )
                    :
                    <>
                        <div className="city_name_heading_weather">

                            <div className="city_icon_w">
                                <BiStreetView />
                            </div>

                            <div className="city_heading_w">
                                {search}
                            </div>

                        </div>

                        <div className="temp_we_main">

                            <div className="main_temp_value">
                                Temp : {city.temp}<TbTemperatureCelsius />
                            </div>

                            <div className="max_min_temp_w">
                                Min : {city.temp_min} C | Max : {city.temp_max} C
                            </div>

                            <div className="humidity_wet_app">
                                Humidity : {city.humidity}
                            </div>

                            <div className="date_Time_div_main">

                                <div className="humidity_wet_app">
                                    {newTime}
                                </div>

                                <div className="humidity_wet_app">
                                    {newDate}
                                </div>

                            </div>

                        </div>
                    </>
                }

            </div>

        </div>
    )
}

export default Weather