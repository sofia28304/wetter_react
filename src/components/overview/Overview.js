import { useEffect, useState } from "react";
import "./Overview.css"


function Overview() {
    let lat = 53.551086;
    let lon = 9.993682;

    const [data, setData] = useState({})
    //use Effect einbauen
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=de&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then((response) => response.json())
            .then((data) => { setData(data) })
        // setDatata ermöglicht die weitere Verarbeitung vom data-Inhalt außerhalb von den useEffect-Klammern.
    }, [lat, lon])

    if (data.main) {
        console.log(data)
        return (
            <section>
                <p>Hamburg,... </p>
                <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="wetter Bildchen" />
                <p>...die Frisur hält!</p>
                <article>
                    <h3>Die aktuelle Temperatur beträgt: <br></br>
                        {data.main["temp"]} °C</h3>
                </article>
                <article>
                    <h3>Die aktuelle Windgeschwindigkeit beträgt:
                        {data.wind["speed"]} Meter/Sekunde
                    </h3>
                </article>
                <article>
                    <p> Weitere relevante Wetterdaten zu Hamburg: </p>
                    <table>
                        <tr>
                            <td>Die Temperatur fühlt sich an wie:</td>
                            <td>{data.main["feels_like"]} °C</td>
                        </tr>
                        <tr>
                            <td>Die Luftfeuchtigkeit beträgt:</td>
                            <td>{data.main["humidity"]} %</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </article>
            </section>
        );
    } else {
        return (
            <div> loading... </div>
        )
    }

    // Alternative: let temp = "0" würde man verwenden um nur if-statement (ohne else) verwenden. Dann 
    // if (data.main) {
    //     temp= data.main.temp;
    //und ggf. weitere wie speed= data.wind.speed...
    // }
    // return (außerhalb des if-statements aber inhaltlich wie oben ...)





}
export default Overview;

// Statt im API Link den Key einzutragen schreibt man  key=${process.env.REACT_APP_}