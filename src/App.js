import React, { useEffect , useState} from "react";
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { io } from "socket.io-client";

import useFetch from "./Hooks/useFetch"
import  Maprender  from "./Components/Maprender/Maprender"


function App() {
  const [ robots , setRobots] = useState([]);

  useEffect(() => {
    const socket = io("https://rapyuta.herokuapp.com/");
    socket.on("robots" , (msg) => {
      setRobots(msg)
    })
  } , []);

  const { data , loading , error} = useFetch("https://rapyuta.herokuapp.com/api/products");
  
  console.log(data)
  return (
    <div>
        <Maprender data={data} robots={robots} loading={loading}/>
    </div>
  );
}

export default App;
 