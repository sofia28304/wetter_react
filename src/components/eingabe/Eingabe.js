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
            <section>
                <p>Möchtest du das Wetter für eine andere Stadt abfragen? Dann gib hier den Stadtnamen ein:</p>
                <input type="text" id="eingabe" className="City" placeholder="z.B. Antarktis"></input>
                <button onClick={() => setCityName(document.getElementById("eingabe").value)}>suchen</button>
                <p>An dem gewünschten Ort liegt die Temperatur bei {data.main.temp}°C. Die Windgeschwindigkeit beträgt {data.wind["speed"]} Meter/Sekunde.</p>
            </section>
        );
    }
    else { <div>bitte warten...</div> }
}
export default Eingabe;