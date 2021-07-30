import React, {useEffect, useState} from 'react';
import './Api.css';

function Api()
{
    const [city, setCity]=useState(null);
    const [search, setSearch]=useState("Mumbai");
    
    useEffect(()=>{
        const fetchApi=async ()=>{
const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=447490a94e93fcc22ec4293349f321aa`;
            const response=await fetch(url);
            const resJson=await response.json();
            setCity(resJson.main);
        };
        fetchApi();

    },[search])
    return(
<>
<div clasName="main">
    <div className="search">
        <span id="lab"><i>Search for the city</i></span>
<input type="search" id="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
</div>
{! city ?(
    
    <p>No data found</p>

):(<div>
    <div className="result">
    <div id="city"><i>{search}</i></div>
    <div id="temp">{city.temp} °Cel</div><br/>
   <h3>min: {city.temp_min} °Cel|| max: {city.temp_max} °Cel</h3>
    </div>

</div> 
)}

</div>
</>
    );
}

export default Api;