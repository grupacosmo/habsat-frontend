import CompoundedSpace from "antd/lib/space";
import React, {useContext, useEffect, useState} from "react"
import { FlightsContext } from "../../container/FlightsProvider/FlightsProvider";
import "./MissionState.css"

const months = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"];

function MissionState() {
    const [date, updateDate] = useState(0)
    const [currentState, setCurrentState] = useState("")
    const { newest:currentFlight } = useContext(FlightsContext);
    const dDayDate = new Date(currentFlight.date)

    const [month, day, year] = [
    dDayDate.getMonth(),
    dDayDate.getDate(),
    dDayDate.getFullYear(),
    ];
    const [hour, minutes, seconds] = [
    dDayDate.getHours() < 10 ? "0"+dDayDate.getHours() : dDayDate.getHours(),
    dDayDate.getMinutes() < 10 ? "0"+dDayDate.getMinutes() : dDayDate.getMinutes(),
    dDayDate.getSeconds() < 10 ? "0"+dDayDate.getSeconds() : dDayDate.getSeconds(),
    ];

    const missionMessages = {
        waiting: {
            title: "Termin potwierdzony!",
            description: `Start ${ day } ${ months[month] }, godzina ${ hour + ":" + minutes }. Do startu pozostało:`,
            buttonText: "Śledzenie wkrótce. Kliknij tutaj aby przejść do mapy."
        },
        live: {
            title: "Misja trwa.",
            description: "Misja jest w trakcie. Możesz śledzić lot balonu korzystając z linku poniżej.",
            buttonText: "Śledź balon."
        },
        ended: {
            title: "Misja zakończona.",
            description: "Historia lotu dostępna w linku poniżej",
            buttonText: "Śledź historię lotu."
        },
    }

    const getMissionState = () => {
        if (currentFlight.flightStage === "FINISHED") return "ENDED";
        const todayDate = new Date()
        let missionStatus = "WAITING";
        if (todayDate >= dDayDate) missionStatus = "LIVE"

        return missionStatus
    }

    const messageTitle = (missionState) => {
        switch (missionState) {
            case "WAITING":
                return <>{missionMessages.waiting.title}</>
            case "LIVE":
                return <>{missionMessages.live.title}</>
            case "ENDED":
                return <>{missionMessages.ended.title}</>
            default:
                return <></>
        }
    }

    const buttonText = (missionState) => {
        switch (missionState) {
            case "WAITING":
                return <>{missionMessages.waiting.buttonText}</>
            case "LIVE":
                return <>{missionMessages.live.buttonText}</>
            case "ENDED":
                return <>{missionMessages.ended.buttonText}</>
            default:
                return <></>
        }
    }

    const messageDescription = (missionState) => {
        switch (missionState) {
            case "WAITING":
                return (
                    <>
                        <div>{missionMessages.waiting.description}</div>
                        <br/>
                        <div className="counterDays">
                            {date.days} dni
                        </div>
                        <br/>
                        <div id="counter-hours" className="counterRoll">
                            <div>{date.hoursF}</div>
                            <div className="counterBottom">{date.hours}</div>
                        </div>
                        <div className="counterRoll">:</div>
                        <div id="counter-minutes" className="counterRoll">
                            <div>{date.minutesF}</div>
                            <div className="counterBottom">{date.minutes}</div>
                        </div>
                        <div className="counterRoll">:</div>
                        <div id="counter-seconds" className="counterRoll">
                            <div>{date.secondsF}</div>
                            <div className="counterBottom">{date.seconds}</div>
                        </div>
                    </>
                )
            case "LIVE":
                return (
                    <>
                        <div className="MissionStateText">
                            {missionMessages.live.description}
                        </div>
                    </>
                )
            case "ENDED":
                return (
                    <>
                        <div className="MissionStateText">
                            {missionMessages.ended.description}
                        </div>
                    </>
                )
            default:
                return <></>
        }
    }

    const difference = () => {
        let nowDate = new Date()
        let nowDateF = new Date(nowDate.getTime() + 1000);

        console.log("difference", dDayDate)

        const sDiff = (dDayDate.getTime() - nowDate.getTime()) / 1000
        let rest = 0
        const days = Math.floor(sDiff / (3600 * 24))
        rest += days * 3600 * 24
        const hours = Math.floor((sDiff - rest) / 3600)
        rest += hours * 3600
        const minutes = Math.floor((sDiff - rest) / 60)
        rest += minutes * 60
        const seconds = Math.floor(sDiff - rest)

        const sDiffF = (dDayDate.getTime() - nowDateF.getTime()) / 1000
        let restF = 0
        const daysF = Math.floor(sDiffF / (3600 * 24))
        restF += daysF * 3600 * 24
        const hoursF = Math.floor((sDiffF - restF) / 3600)
        restF += hoursF * 3600
        const minutesF = Math.floor((sDiffF - restF) / 60)
        restF += minutesF * 60
        const secondsF = Math.floor(sDiffF - restF)

        return {
            days: days,
            hours: hours < 10 ? "0" + hours : hours,
            minutes: minutes < 10 ? "0" + minutes : minutes,
            seconds: seconds < 10 ? "0" + seconds : seconds,

            daysF: days,
            hoursF: hoursF < 10 ? "0" + hoursF : hoursF,
            minutesF: minutesF < 10 ? "0" + minutesF : minutesF,
            secondsF: secondsF < 10 ? "0" + secondsF : secondsF
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            let state = getMissionState() 
            if (state !== currentState) setCurrentState(state)
            
            const diff = difference()
            if (state === "WAITING") {
                try {
                    updateDate(diff)
                    const seconds = document.getElementById("counter-seconds")
                    seconds.classList.remove("counterAnimate")
                    void seconds.offsetWidth
                    seconds.classList.add("counterAnimate")

                    const minutes = document.getElementById("counter-minutes")
                    if (minutes.children[0].innerHTML !== minutes.children[1].innerHTML) {
                        minutes.classList.remove("counterAnimate")
                        void seconds.offsetWidth
                        minutes.classList.add("counterAnimate")
                    } else {
                        minutes.classList.remove("counterAnimate")
                    }

                    const hours = document.getElementById("counter-hours")
                    if (hours.children[0].innerHTML !== hours.children[1].innerHTML) {
                        hours.classList.remove("counterAnimate")
                        void seconds.offsetWidth
                        hours.classList.add("counterAnimate")
                    } else {
                        hours.classList.remove("counterAnimate")
                    }

                } catch (e) {
                    console.log("err", e)
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        currentState ?
            <div className="MissionStateWrapper">
                <div className="MissionStateTitle">{messageTitle(currentState)}</div>
                <div className="MisssionStateDescription">
                    {messageDescription(currentState)}
                </div>
                { currentState == "WAITING" ?
                    <a className="MissionStateLink MissionStateLink__disabled" href="/map">{buttonText(currentState)}</a>
                    :
                    <a className="MissionStateLink" href="/map">{buttonText(currentState)}</a>
                }
            </div>
         : null
    )
}

export default MissionState