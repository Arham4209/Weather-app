const apiKey = "d251673167a6b9cf67c23ce4bfdd0b94";


const getWeather = async ( city) =>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city }&units=metric&appid=${apiKey}`)
    .then((res) => res.json())
    .then((json) =>{
        return json;
    })

 
}

export default getWeather;