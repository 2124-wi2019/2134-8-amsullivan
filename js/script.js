/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    5/2/2020
*/
window.addEventListener('load', () => {//event listener on page load
    
    startClock();
        //YOUR CODE SHOULD START BELOW THIS LINE
    
    navigator.geolocation.getCurrentPosition(findLocation);//call getCurrentPosition using navigator and geolocation
        
    function findLocation(position){//function to find position of user
       console.log(`Latitude: `+ position.coords.latitude `, Longitude: `+ 
       position.coords.longitude +`.`);
    }
    
    const buttons = document.getElementsByTagName('button'); //const set to the button tag name
    
    for(const button of buttons){//for loop button const
        const buttonID = button.dataset.id; //const buttonID set to button id
    button.addEventListener('click', () => {//event listen on click of button
        if(buttonID == 'getCurrentWX'){//if buttonID = getCurrentWX call function getCurrentWX
            getCurrentWX(); 
        }
        else if(buttonID == 'getFiveDay') {//if buttonID = getFiveDay call function getFiveDay
                getFiveDay();
            }
        })
    }
    
    function getCurrentWX() {//function getCurrentWX
        console.log(`getCurrentWX() invoked`);
        let url1 = `api.openweathermap.org/data/2.5/weather?` + `lat=` + position.coords.latitude +
        `& lon= ` + position.coords.longitude + `appid=c4b2524f1d913f75dbba99b34cf5341f`;//appid to fetch position info
    
        fetch (url1)//fetch url info
            .then(response => response.json() )
                .then( (location => {
    
                //create let variables of elements below
                let currentWxHolder = document.getElementById('currentWxHolder');
                let h2 = document.createElement('h2');
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                let div3 = document.createElement('div');

                //create innerHTML for the elements below
                h2.innerHTML = location.name;
                div1.innerHTML = `Current Temp: ` + location.main.temp(imperial);
                div2.innerHTML = `Max Temp: `+ location.main.temp_max(imperial);
                div3.innerHTML = `Min Temp: `+ location.main.temp_min(imperial);

                //appendChild elemetns to currentWxHolder id
                currentWxHolder.appendChild(h2);
                currentWxHolder.appendChild(div1);
                currentWxHolder.appendChild(div2);
                currentWxHolder.appendChild(div3);
    
    }))
    }
    
    
    function getFiveDay() {//function getFiveDay
        console.log(`getFiveDay() invoked`);
        let url2 = `api.openweathermap.org/data/2.5/forcast?lat=` + position.coords.latitude + 
        `&lon=`+ position.coords.latitude + `&appid=c4b2524f1d913f75dbba99b34cf5341f`;//appid to fetch position info
    
        fetch(url2)//fetch url info
            .then( response => response.json())
                .then( (list => {
    
            //create let variables of elements below
            let fiveDayInfoHolder = document.getElementById('fiveDayInfoHolder');//let set to fiveDayInfoHolder id
            let h2 = document.createElement('h2'); //create h2 element
            let div1 = document.createElement('div'); //let div created
            let div2 = document.createElement('div');//let div created
            let div3 = document.createElement('div');//let div created
            let div4 = document.createElement('div');//let div created
            let div5 = document.createElement('div');//let div created

            //create innerHTML in each created element below
            h2.innerHTML = city.name; 
            div1.innerHTML = '3 Hour Forcast';
            div2.innerHTML = `Forcast Time UTC: ` + list.dt_txt;
            div3.innerHTML = `Temperature: ` + list.main.temp(imperial);
            div4.innerHTML = `Max Temperature: ` + list.main.temp_max(imperial);
            div5.innerHTML = `Min Temperature: ` + list.main.temp_min(imperial);

            //append the elements to fivedayholder below
            fiveDayInfoHolder.appendChild(h2); 
            fiveDayInfoHolder.appendChild(div1);
            fiveDayInfoHolder.appendChild(div2);
            fiveDayInfoHolder.appendChild(div3);
            fiveDayInfoHolder.appendChild(div4);
            fiveDayInfoHolder.appendChild(div5);
    
                }))
                    
    }
    
    });
    class WeatherForcast { //class WeatherForcast
        constructor(date, temp, minTemp, maxTemp){
            this.date = date;
            this.temp = temp;
            this.minTemp = minTemp;
            this.maxTemp = maxTemp;
        }
        getDate(){
            return this.date;
        }
        getTemp(){
            return this.temp;
        }
        getMaxTemp(){
            return this.maxTemp;
        }
        getMinTemp(){
            return this.minTemp;
        }
        getDayString(){
            let dy = new Date();
            dy.getDay.toString();
            let m = new Date();
            m.getMonth();
            let dt = new Date();
            dt.getDate();
            this.date = `${dy} , ${m} , ${dx}`;
            this.dayString = this.date;
            return this.dayString;
        }
    }