import React, {FC, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { EmptyFlight, Flight } from "typings/flights.d";

interface IFlightContext {
  flights: Flight[],
  currentFlight: Flight,
  switchCurrentFlight: (id: number) => void,
  newest: Flight
}

export const FlightsContext = React.createContext<IFlightContext>({
  flights: [],
  currentFlight: EmptyFlight,
  switchCurrentFlight: () => {},
  newest: EmptyFlight,
});

// export const FlightsContext = React.createContext<IFlightContext | null>(null);

const FlightsProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [currentFlight, setCurrentFlight] = useState<Flight>(EmptyFlight);
  const [newest, setNewest] = useState<Flight>(EmptyFlight);
  const [finishedFlights, setFinishedFlights] = useState<Flight[]>([]);

  useEffect(() => {
    axios
      .get<Flight>(`/api/Flight/newest`)
      .then(({ data }) => {
        setNewest(data);
        setCurrentFlight(data);
      })
      .catch((err) => console.log("FlightsProvider error:", err));
  }, []);

  useEffect(() => {
    axios
      .get<Flight[]>("api/Flight/stage/FINISHED")
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
