import React, {useState, useEffect} from "react";
import "./App.css";
import NasaPhoto from './Components/NasaPhoto'
import axios from 'axios'
import NasaDatepicker from './Components/NasaDatepicker'

function App() {
  const [data, setData] = useState();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=eRuyYT6THvMb3DcnI7WhK37kdi2cUgPggyhxeBs9')
    .then(resp => {
      setData(resp.data)
    })
    .catch(err => {
      console.error(err);
    })
  }, []);

  useEffect(() => {
    const formattedDate = new Date(startDate).toLocaleDateString('en-CA') // 2020-08-19 (year-month-day) notice the different locale
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=eRuyYT6THvMb3DcnI7WhK37kdi2cUgPggyhxeBs9&date=${formattedDate}`)
    .then(resp => {
      setData(resp.data)
    })
    .catch(err => {
      console.error(err);
    });
  },[startDate]);

  return (
    <div className="App nav-bar">
        <img className="nasa-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png" />
        <a href="https://api.nasa.gov/">NASA API</a>
        <NasaDatepicker className="nav-bar" startDate={startDate} setStartDate={setStartDate}/>
      <h1>NASA Photo Of The Day</h1>
      {data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;