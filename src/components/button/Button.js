import { useEffect, useState } from "react";

function Button() {
    const [data, setData] = useState({})
    const [cityName, setCityName] = useState("Berlin")

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => { setData(data) })
    }, [cityName])
    // console.log(data.main)
    if (data.main) {
        // let lat= 
        return (
            <article>
                <button id="ber" onClick={() => setCityName("Berlin")}>Berlin</button>

                <button id="ant" onClick={() => setCityName("Antarktika")}>Antarktika</button>

                <p>In der gewünschten Stadt {data.name} ist es {data.main.temp}°C.</p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="wetter Bildchen" />
                <p> <a href={`https://www.google.com/maps/place/${data.name}`}>{data.coord.lat}, {data.coord.lon}</a></p>
            </article>

        )
    }
    else { <p>loading...</p> }

}

export default Button;