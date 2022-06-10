import {  useState } from "react";
import Map, { FullscreenControl , NavigationControl , GeolocateControl ,Popup , Marker} from "react-map-gl";
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import RobotCard from "../Mapcard.js/RoboticCard";
import ProductCard from "../Mapcard.js/ProductCard"
import { XlviLoaderComponent } from "../Loader/Loader";

function Maprender({robots , data , loading}) {
  const [currentPlaceId, setCurrentPlaceId] = useState(null);
  const [viewport , setViewport] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 4
  })
  
  const handleMarkerClick = (id) => {
    setCurrentPlaceId(id);
  };
  


return loading? (<div>
   <XlviLoaderComponent/>
      </div>) :(
     <div>
        <Map
          initialViewState={viewport}
          style={{width: '98vw', height: '90vh'}}
          mapStyle="mapbox://styles/experienceiq/cl4664ejm000614l0hrxy3bwc"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX}
         >
          <FullscreenControl />
          <NavigationControl />
          <GeolocateControl/>

         {robots.length > 0 &&
          robots.map((item)=> 
          <>
          <Marker key={item.id}  latitude={item?.location?.coordinates[1]} longitude={item?.location?.coordinates[0]} anchor="bottom" >
              <SmartToyOutlinedIcon style={{fontSize:viewport.zoom * 10 , color:"#09C97F" , cursor: "pointer"}} onClick={() => handleMarkerClick(item._id)} />
          </Marker>
           {item._id === currentPlaceId && 
            <Popup longitude={item?.location?.coordinates[0]} latitude={item?.location?.coordinates[1]}
              anchor="left"
              closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}>
              <RobotCard key={item.id} item={item}/>
            </Popup>}  
          </>
          )}

          {data.length > 0 &&
          data.map((item)=> 
          <>
          <Marker key={item.id}  latitude={item?.location?.coordinates[1]} longitude={item?.location?.coordinates[0]} anchor="bottom" >
              <ShoppingCartOutlinedIcon style={{fontSize:viewport.zoom * 10 , color:"#F79500" , cursor: "pointer"}} onClick={() => handleMarkerClick(item._id)} />
          </Marker>
          {item._id === currentPlaceId && 
            <Popup longitude={item?.location?.coordinates[0]} latitude={item?.location?.coordinates[1]}
              anchor="left"
              closeOnClick={false}
              onClose={() => setCurrentPlaceId(null)}>
              <ProductCard key={item.id} item={item}/>
            </Popup>}  
          </>
          )}

         </Map>
      </div>
    )
}


export default Maprender;