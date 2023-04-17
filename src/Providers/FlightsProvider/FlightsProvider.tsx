import React, {FC, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { emptyFlight, flight } from "typings/flights.d";

interface IFlightContext {
  flights: flight[],
  currentFlight: flight,
  switchCurrentFlight: (id: number) => void,
  newest: flight
}

export const FlightsContext = React.createContext<IFlightContext>({
  flights: [],
  currentFlight: emptyFlight,
  switchCurrentFlight: () => {},
  newest: emptyFlight,
});

// export const FlightsContext = React.createContext<IFlightContext | null>(null);

const FlightsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [flights, setFlights] = useState<flight[]>([]);
  const [currentFlight, setCurrentFlight] = useState<flight>(emptyFlight);
  const [newest, setNewest] = useState<flight>(emptyFlight);
  const [finishedFlights, setFinishedFlights] = useState<flight[]>([]);

  useEffect(() => {
    axios
      .get<flight>(`/api/flight/newest`)
      .then(({ data }) => {
        setNewest(data);
        setCurrentFlight(data);
      })
      .catch((err) => console.log("FlightsProvider error:", err));
  }, []);

  useEffect(() => {
    axios
      .get<flight[]>("api/flight/stage/FINISHED")
      .then(({ data }) => {
        setFinishedFlights(data);
      })
      .catch((err) => console.log("FlightsProvider error:", err));
  }, []);

  useEffect(() => {
    if (finishedFlights.length > 0 && newest.date) {
      setFlights([...finishedFlights, newest]);
    }
  }, [finishedFlights, newest]);

  const switchCurrentFlight = (id:number) => {
    setCurrentFlight(flights[id]);
  };

  return (
    <FlightsContext.Provider
      value={{
        flights,
        currentFlight,
        switchCurrentFlight,
        newest,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export default FlightsProvider;
