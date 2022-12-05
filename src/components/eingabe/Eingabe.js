import { useEffect, useState } from "react";
import "./Eingabe.css"

function Eingabe() {
    const [data, setData] = useState({})
    const [cityName, setCityName] = useState("Antarctica")

    //use Effect einbauen
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => { setData(data) })
    }, [cityName])

    if (data.main) {
        return (
            <div>
                <input type="text" id="eingabe" className="City" ></input>
                <button onClick={() => setCityName(document.getElementById("eingabe").value)}>schicken</button>
                <p>In der Gewünschten Stadt ist die Temperatur {data.main.temp}°C.</p>
            </div>
        );
    }
    else { <div>bitte warten...</div> }
}
export default Eingabe;