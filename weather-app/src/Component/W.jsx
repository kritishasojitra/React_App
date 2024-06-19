import { useState } from "react";

function W() {
    const [ input, setInput]  = useState("");
    const [data,setData] = useState(null)
    const key = '83d9354c5a6e630557a9b69c7c66a978'

    console.log(input);

    async function findwether() {
        if (!input) {
            console.log("something Went Wrong...");
        }
        else {

            let url = https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key};

            try {
                const data = await fetch(url);
                const alldata = await data.json();
                console.log(alldata);
                setData(alldata)
            } catch (error) {
                console.log("Data Fatching Error...");
            }
        }
    }
    // let url = 'https:api.openweathermap.org/data/2.5/weather?q={inputvalue}&appid={83d9354c5a6e630557a9b69c7c66a978}';
    return (
        <div>
            <div class="weather-app">
                <div class="container">
                    <h1>My Weather App</h1>
                    <div class="search-box">
                        <input type="text" id="cityInput" placeholder="Enter city name" onChange={(e) => setInput(e.target.value)} className="form-control" />
                        <button onClick={findwether}>Search</button>
                    </div>
                    <div class="weather-info" id="weatherInfo">
                        <h1>{input}</h1>
                        {
                            data && (
                                <>
                                <h1>{data.name}</h1>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default W;
