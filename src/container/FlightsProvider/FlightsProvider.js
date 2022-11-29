import React, {useEffect, useState} from 'react';
import axios from 'axios';
import flightsData from '../../data/FlightsData';

export const FlightsContext = React.createContext({
    flights: [],
    currentFlight: {},
    switchCurrentFlight: () => {}
});

const FlightsProvider = ({ children }) => {
    const [flights, setFlights] = useState(flightsData);
    const [currentFlight, setCurrentFlight] = useState(flightsData[0]);

    useEffect(() => {
      axios
        .get('/list')
        .then(({ data }) => setFlights(data.flights))
        .catch((err) => console.log(err));
    }, []);

    const switchCurrentFlight = (id) => {
        setCurrentFlight(flights[id]);
    };

    return (
        <FlightsContext.Provider 
            value={{
              flights,
              currentFlight,
              switchCurrentFlight
            }}
          >
            {children}
        </FlightsContext.Provider>
    )
}

export default FlightsProvider