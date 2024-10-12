"use client"
// API PAGE
import { useState } from 'react';

export default function Page() {
  const DATA_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";
  const NDATA_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date=2023-09-01&end_date=2023-09-10";
  const [data, setData] = useState(null);
  const [ndata, setNdata] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setData(data);
    } catch (error) {    
      // console.log(response);
      console.error(`Could not get products: ${error}`);
    }
  }

  async function fetchNData() {
    try {
      const response = await fetch(NDATA_URL);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const ndata = await response.json();
      setNdata(ndata);
    } catch (error) {    
      // console.log(response);
      console.error(`Could not get products: ${error}`);
    }
  }

  function clearData() {
    setData(null);
  }

  function clearNData() {
    setNdata(null);
  }

  const DisplayProduct = () => {
    if (data) {
      let productList = [];
      data.forEach((product, i) => {productList.push(<li key={i}>{product.name}</li>);});

      return (
        <div className="border-4 border-black p-4 mb-4">
          <ul>
            {productList}
          </ul>
        </div>
      ) 
    } else {
      return (
        <div className="border-4 border-black p-4 mb-4">
          <ul>
            Hello welcome to my API page - No data now!
          </ul>
        </div>
      )
    }
  }
  
  const DisplayMedia = () => {
    if (ndata) {
      let mediaList = [];
      ndata.forEach((medium, i) => {
        let formattedMedia = (medium.media_type === 'image') 
        ? <img src={medium.url} /> 
        : <video controls width="250"><source src={medium.url} type="video/webm" /></video>;
      
        mediaList.push(<li key={i}>{formattedMedia}<h3>{medium.title}</h3>{medium.explanation}</li>);
      });

      return (
        <div className="border-4 border-black p-4 mb-4">
          <ul>
            {mediaList}
          </ul>
        </div>
      ) 
    } else {
      return (
        <div className="border-4 border-black p-4 mb-4">
          <ul>
            Hello welcome to my NASA API page - No data now!
          </ul>
        </div>
      )
    }
  }

  return (
    <div className="p-4 bg-yellow-300">
      <header className="border-4 border-black p-4 mb-4 text-black">
        <div>        
          <h1>Welcome to my product page</h1>
          <button className="border-neutral-200 bg-black px-6 mr-5 text-white" onClick={fetchData}>Fetch product!</button>
          <button className="border-neutral-200 bg-black px-6 text-white" onClick={clearData}>Clear Data!</button>
        </div>
        <div>
          <h1>Welcome to my NASA page</h1>
          <button className="border-neutral-200 bg-black px-6 mr-5 text-white" onClick={fetchNData}>Fetch product!</button>
          <button className="border-neutral-200 bg-black px-6 text-white" onClick={clearNData}>Clear Data!</button>
        </div>
      </header>
      <div  className="border-4 border-black p-4 mb-4 text-black">
        <DisplayProduct />
        <DisplayMedia />
      </div>
    </div> 
  );
}