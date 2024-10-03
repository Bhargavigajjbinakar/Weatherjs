let form = document.querySelector("form")
form.addEventListener("submit",(p)=>
{
 p.preventDefault()

let location = document.getElementById("location").value

let fetchWeather = async()=>{
    let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=598c96e9eae7234303d4273c1d008bed`)
    let finaldata=await data.json()
    // console.log(finaldata)
    // console.log(finaldata.weather[0].description)
    // console.log(finaldata.main.temp)
    // console.log(finaldata.main.humidity)

    let weatherdescription=(finaldata.weather[0].main).toUpperCase()
    let tempvalue=(Math.round(finaldata.main.temp-273))
    let humidvalue=(finaldata.main.humidity)

     let desc=document.querySelector("#secondcontainer p")
     desc.innerHTML=`${weatherdescription}`

    let temp=document.querySelector("#temperature>h1")
    temp.innerHTML=`${tempvalue} <sup>0</sup>`

    let humid=document.querySelector("#humidity>h1")
    humid.innerHTML=`${humidvalue}<apan> KMPH</apan>`


    let img=document.getElementById("img")
    console.log(img)
    let bgc=document.getElementById("maincontainer")
    switch(weatherdescription){
        case 'CLOUDS' :
            img.src="IMG-20241002-WA0001.jpg"
            bgc.style.backgroundImage="url(cloudsWeather.gif)"
            break;
        case 'RAIN' :
                img.src="rainy.png"
                bgc.style.backgroundImage="url(rainWeather.gif)"
                break;  
        case 'SNOW' :
                    img.src="IMG-20241002-WA0004.jpg"
                    bgc.style.backgroundImage="url(snowWeather.gif)"
                    break; 
        case 'MIST' :
                    img.src="IMG-20241002-WA0003.jpg"
                    bgc.style.backgroundImage="url(mistWeather.gif)"
                    break; 
        case 'DUST' :
                    img.src="IMG-20241002-WA0005.jpg"
                    bgc.style.backgroundImage="url(dustWeather.gif)"
                    break; 
        case 'HAZE' :
                    img.src="IMG-20241002-WA0002.jpg"
                    bgc.style.backgroundImage="url(hazeWeather.gif)"
                    break; 
        default :
                    img.src="IMG-20241002-WA0001.jpg"
                    bgc.style.backgroundImage="url(clearWeather.gif)"
                    break;

    }
}
 


fetchWeather()
})
