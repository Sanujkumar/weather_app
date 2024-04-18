let apiKey ="9546844bf27fa637575988bf9e85e5b6";
let apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";    

let searchbox = document.querySelector(".search input");

let searchbtn = document.querySelector(".search button");

let weatherIcon = document.querySelector(".weather-icon");  

async function checkWeather(city1){
    let response = await fetch(apiUrl + city1 + `&appid=${apiKey}`);   
    let data = await response.json();
    
    if(response.status == 404){
       let err= document.querySelector(".error");
       err.style.display = "block";   
    }
    
    let city =document.querySelector(".city");
    city.innerHTML = data.name;   

    let temp =document.querySelector(".temp");
    temp.innerHTML = Math.round(data.main.temp) + "°C";  

    let humidity =document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity +"%";   
   

    let wind =document.querySelector(".wind");
    wind.innerHTML = data.wind.speed + " km/hr"; 
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }  

    let weather = document.querySelector(".weather");
    weather.style.display = "block";  
         
}     
searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);            
})

       