export interface Flight {
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

export const EmptyFlight:Flight = {
    date: '',
    description: '',
    flightDataResponseList: [],
    flightStage: '',
    title: ''
}

export interface IPost {
    id: number,
    thumbnailId: number,
    title: string,
    slug: string,
    content: string,
    emailOfAuthor: string
    publishedAt: string,
    createdAt:string,
    updatedAt?:string,
}