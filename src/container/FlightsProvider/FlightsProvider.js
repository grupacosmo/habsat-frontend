import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {flightsData as flightList } from '../../data/FlightsData';

export const FlightsContext = React.createContext({
    finishedFlights: [],
    currentFlight: {},
    switchCurrentFlight: () => {},
   // startDate: new Date()
});

const FlightsProvider = ({ children }) => {
    const [finishedFlights, setFinishedFlights] = useState([]);
    const [flights, setFlights] = useState([]);
    const [newest, setNewest] = useState({});
    const [currentFlight, setCurrentFlight] = useState({});
    //const startDate =  new Date(currentFlight.date);

    console.log("flightsProvider, currentFlight: ",currentFlight);
    console.log("flightsProvider, finishedFlights: ",finishedFlights);
    console.log("flightsProvider, flights: ",flights);
    console.log("flightsProvider, newest: ",newest);
    //console.log("flightsProvider: ",startDate);

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
        console.log("axios finished");
    }, []);

    useEffect(() => {
      if (finishedFlights.length > 0 && newest.date) {
        console.log("pushuje", newest, finishedFlights);
        //finishedFlights.push(currentFlight);
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
             // startDate
            }}
          >
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider