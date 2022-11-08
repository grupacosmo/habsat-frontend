import React, {useState, useEffect} from "react";

const flights = [
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

export const useFlights = () => {
  const [currentFlight, setCurrentFlight] = useState(flights[2]);

  React.useEffect(() => {
    console.log("UseFlights ",currentFlight);
    }, [currentFlight]);

  const changeFlight = (id) => {
    setCurrentFlight(flights[id]);
  }

  return {
    flights,
    currentFlight,
    changeFlight
  }
}