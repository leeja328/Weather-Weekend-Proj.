

//grabbing form data from a submit event
const form = document.querySelector('#testDataForm')

//Add event listener to that submit event
//use this to pull the city
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let query_city = document.querySelector('#city');
    let city = query_city.value
    load_data(city)
})

form.addEventListener('submit1', (event) => {
    event.preventDefault();
    let query_zip = document.querySelector('#zip');
    let zip = query_zip.value
    load_data1(zip)
})

//pulling query to direct the season and round 
const getData = async (city) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=db1598dc90462aae56528735c9c64dfa&units=imperial`)
    console.log(response.data)
    return response.data
    
}
// tried to get the zip to work but keeps getting uncaught in a promise
const getData1 = async (zip) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=db1598dc90462aae56528735c9c64dfa&units=imperial`)
    console.log(response.data)
    return response.data
    
}

// create Constants to hold DOM elements
const DOM_Elements = {
    location_list: '.location-list'
}

// creation of the location list html
const create_list = (name, high, low, forcast, humidity) => {
    const html = 
    `<div id="list1">
    <h1>${name}</h1>
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">High</div>
    <div class="card-body">
        <h5 class="card-text">${high}</h5>
    </div>
  </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Low</div>
    <div class="card-body">
        <h5 class="card-text">${low}</h5>
    </div>
  </div>
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Forcast</div>
    <div class="card-body">
        <h5 class="card-text">${forcast}</h5>
    </div>
  </div>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Humidity</div>
    <div class="card-body">
        <h5 class="card-text">${humidity}</h5>
    </div>
  </div>
    </div>`
    document.querySelector(DOM_Elements.location_list).insertAdjacentHTML('beforeend', html)
}

const create_list1 = (high, low, forcast, humidity) => {
    const html = 
    `<div id="list1">
        <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">High</div>
    <div class="card-body">
        <h5 class="card-text">${high}</h5>
    </div>
  </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Low</div>
    <div class="card-body">
        <h5 class="card-text">${low}</h5>
    </div>
  </div>
  <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Forcast</div>
    <div class="card-body">
        <h5 class="card-text">${forcast}</h5>
    </div>
  </div>
  <div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Humidity</div>
    <div class="card-body">
        <h5 class="card-text">${humidity}</h5>
    </div>
  </div>
    </div>`
    document.querySelector(DOM_Elements.location1_list).insertAdjacentHTML('beforeend', html)
}

// Function to load data and display html
const load_data = async (city) => {
    const location = await getData(city);
    create_list(location.name, location.main.temp_max, location.main.temp_min, location.weather[0].main, location.main.humidity)
}

const load_data1 = async (zip) => {
    const location1 = await getData1(zip);
    create_list1(location1.main.temp_max, location1.main.temp_min, location1.weather[0].main, location1.main.humidity)
}

// Function to clear data
const clear_data = () => {
    window.location.reload()
}