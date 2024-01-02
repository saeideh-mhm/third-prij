let B =document.querySelector(".b")
let S = document.getElementById("structure")
let inputElm = document.querySelector("input")
let im= document.getElementById("im")
let apiData={
    url:"https://api.openweathermap.org/data/2.5/weather?q=",
    key: "7212b4bf5cb0cf16f7e4325f41b40123"
}
function apiAll() {
    let countryName=inputElm.value
    
    fetch(`${apiData.url}${countryName}&&appid=${apiData.key}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if (data.weather[0].main ==="Clouds") {
            im.src ="./rain.png"
        }else if(data.weather[0].main ==="Rain"){
            im.src ="./cloud.png"

        }else if(data.weather[0].main ==="Clear"){
            im.src="./contrast.png"
        }
       showdata(data)
    })
}
function showdata(data){
    let countryIr = document.querySelector(".countryir")
    countryIr.innerHTML = `${data.sys.country},`
   let cName =document.getElementById("n")
    cName.innerHTML=`${data.name}`
   let temptName = document.querySelector(".temp") 
   temptName.innerHTML=`${Math.floor(data.main.temp-273.15)}°C`
   let datetName = document.querySelector(".date") 
   datetName.innerHTML =showDate()
   let clock =document.querySelector(".clockk")
   clock.innerHTML = showhours()
   let maxTemp=document.querySelector(".maxtemp")
   maxTemp.innerHTML = `Max: ${Math.floor(data.main.temp_max-273.15)}°C`
   let minTemp=document.querySelector(".mintemp")
   minTemp.innerHTML = `Min: ${Math.floor(data.main.temp_min-273.15)}°C`
   let Wind =document.querySelector(".wind")
   Wind.innerHTML =`wind: ${data.wind.speed} Km/h`
   let Weathermain =document.querySelector(".weathermain")
   Weathermain.innerHTML =`${data.weather[0].main}`
 
   

   
}



inputElm.addEventListener("keypress",(event)=>{     
    if(event.keyCode===13){
    apiAll();
    B.style.display ="none"
    S.style.display ="block"
    
    }
})

function showDate () {


    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let now = new Date()

    let day = days[now.getDay()]
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let date = now.getDate()
    
    
    return `${day} ${date} ${month} ${year}`

}
function showhours (){
    let nowClock = new Date()
    let hour = nowClock.getHours()
    let minute = nowClock.getMinutes()
    return `${hour}:${minute}`
}
let buttonElm= document.querySelector("button")
buttonElm.addEventListener("click",()=>{
    apiAll();
    B.style.display ="none"
    S.style.display ="block"

})