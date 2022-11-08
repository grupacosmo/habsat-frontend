import React, {useState} from 'react';

const flightsData = [
    {
      label: '02-05-2022r.',
      key: 0,
    },
    {
      label: '14-02-2022r.',
      key: 1,
    },
    {
      label: '05-07-2022r.',
      key: 2,
    },
  ];

export const FlightsContext = React.createContext({
    flights: [],
    currentFlight: {},
    switchCurrentFlight: () => {}
});

const FlightsProvider = ({ children }) => {
    const [flights, setFlights] = useState(flightsData);
    const [currentFlight, setCurrentFlight] = useState(flightsData[0]);

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