import React, {useEffect, useState} from 'react';
import axios from 'axios';
//import {flightsData as flightList } from '../../data/FlightsData';

export const FlightsContext = React.createContext({
    finishedFlights: [],
    currentFlight: {},
    switchCurrentFlight: () => {},
    newest: {}
});

const FlightsProvider = ({ children }) => {
    const [flights, setFlights] = useState([]);
    const [currentFlight, setCurrentFlight] = useState({});
    const [newest, setNewest] = useState({});
    const [finishedFlights, setFinishedFlights] = useState([]);

    useEffect(() => {
      axios
        .get('/flight-service/flight/newest')
        .then(({ data }) => {
          setNewest(data);
          setCurrentFlight(data);
        })
        .catch((err) => console.log("FlightsProvider error:",err));
    }, []);
    
    useEffect(() => {
      axios
        .get('/flight-service/flight/stage/FINISHED')
        .then(({ data }) => {
          setFinishedFlights(data);
        })
        .catch((err) => console.log("FlightsProvider error:",err));
    }, []);

    useEffect(() => {
      if (finishedFlights.length > 0 && newest.date) {
        setFlights([...finishedFlights, newest]);
      }
    },[finishedFlights, newest]);
    
    const switchCurrentFlight = (id) => {
        setCurrentFlight(flights[id]);
    };

    return (
        <FlightsContext.Provider 
            value={{
              flights,
              currentFlight,
              switchCurrentFlight,
              newest
            }}
          >
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider