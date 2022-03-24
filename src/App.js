import React, { useState, useEffect } from "react";
import "./App.css";
import NasaPhoto from './Components/NasaPhoto'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadContainer from './Components/HeadContainer'
import styled from 'styled-components'

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
    const formattedDate = new Date(startDate).toLocaleDateString('en-CA')
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=eRuyYT6THvMb3DcnI7WhK37kdi2cUgPggyhxeBs9&date=${formattedDate}`)
      .then(resp => {
        setData(resp.data)
      })
      .catch(err => {
        console.error(err);
      });
  }, [startDate]);

  const Format = styled.div`
  background-color: #e9ecef;
  `

  return (
    <Format>
    <div className="App">
      <HeadContainer startDate={startDate} setStartDate={setStartDate} />
      {data && <NasaPhoto photo={data} />}
    </div>
    </Format>
  );
}

export default App;