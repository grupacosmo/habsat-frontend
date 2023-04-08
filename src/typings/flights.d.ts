export interface flight {
    date: string,
    description: string,
    flightDataResponseList: any[],
    flightStage: string
    title: string
}

export const emptyFlight:flight = {
    date: '',
    description: '',
    flightDataResponseList: [],
    flightStage: '',
    title: ''
}