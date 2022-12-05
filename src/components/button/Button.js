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
            <section>
                <p>Vielleicht möchtest du auch nur ein bisschen Zeit totschlagen? Dann such dir doch dein nächstes Urlaubsziel raus:</p>
                <button id="ber" onClick={() => setCityName("Cayman Islands")}>Cayman Inseln</button>
                <button id="ber" onClick={() => setCityName("Berlin")}>Berlin, DE</button>
                <button id="ber" onClick={() => setCityName("Uluru")}>Uluru, AUS</button>
                <button id="ant" onClick={() => setCityName("Nagano")}>Mt. Nagano, JP</button>

                <p>an dem Wunschort {data.name} sind es {data.main.temp}°C.</p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="wetter Bildchen" />
                <p> <a href={`https://www.google.com/maps/place/${data.name}`}>{data.coord.lat}, {data.coord.lon}</a></p>
            </section>

        )
    }
    else { <p>loading...</p> }

}

export default Button;