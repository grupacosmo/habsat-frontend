export interface flight {
    date: string,
    description: string,
    flightDataResponseList: IDataPoint[],
    flightStage: string
    title: string
}

export interface IDataPoint {
    speed: number,
    altitude: number,
    longitude: number,
    latitude: number,
    temperature: number,
    time: string,
    rssi: number
}

export const emptyFlight:flight = {
    date: '',
    description: '',
    flightDataResponseList: [],
    flightStage: '',
    title: ''
}
