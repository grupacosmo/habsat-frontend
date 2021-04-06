import React, { useState, useEffect } from "react"
import "./MissionState.css"

function MissionState(){
    const [date, updateDate] = useState(0)

    const dDayDate = new Date(2021,3,20)
    const endDate = new Date(2021,3,22)

    const missionMessages = {
        waiting: {
            title: "Oczekiwanie",
            description: "Do startu pozostało:",
        },
        live: {
            title: "Misja trwa",
            description: "Misja jest w trakcie. Możesz śledzić lot balonu korzystając z linku poniżej.",
        },
        ended: {
            title: "Misja skończona",
            description: "Historia lotu dostępna w linku poniżej",
        },
    }

    const getMissionState = (dDayDate, endDate) => {
        const todayDate = new Date()
        let missionStatus = "WAITING"
        if(todayDate >= dDayDate &&  todayDate <= endDate) missionStatus = "LIVE"
        if(todayDate >= endDate) missionStatus = "ENDED"

        return missionStatus
    }

    let currentState = getMissionState(dDayDate, endDate)

    const messageTitle = (missionState) => {
        switch(missionState) {
            case "WAITING":
                return <>{missionMessages.waiting.title}</>
            break
            case "LIVE":
                return <>{missionMessages.live.title}</>
            break
            case "ENDED":
                return <>{missionMessages.ended.title}</>
            break
        }
    }

    const messageDescription = (missionState) => {
        switch(missionState) {
            case "WAITING":
                return(
                    <>
                    <div>{missionMessages.waiting.description}</div><br></br>
                    <div className="counterDays">
                        {date.days} dni
                    </div><br></br>
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
            break
            case "LIVE":
                return(
                    <>
                    <div className="MissionStateText">
                        {missionMessages.live.description}
                    </div>
                    </>
                )
            break
            case "ENDED":
                return(
                    <>
                    <div className="MissionStateText">
                        {missionMessages.ended.description}
                    </div>
                    </>
                )
            break
        }
    }
    
    const difference = () => {
        let nowDate = new Date()
        let nowDateF = new Date(nowDate.getTime() + 1000);

        const sDiff = (dDayDate.getTime()-nowDate.getTime())/1000
        let rest = 0
        const days = Math.floor(sDiff/(3600*24))
        rest+= days*3600*24
        const hours = Math.floor((sDiff - rest)/3600)
        rest+= hours*3600
        const minutes = Math.floor((sDiff - rest)/60)
        rest+= minutes*60
        const seconds = Math.floor(sDiff - rest)

        const sDiffF = (dDayDate.getTime() - nowDateF.getTime())/1000
        let restF = 0
        const daysF = Math.floor(sDiffF/(3600*24))
        restF+= daysF*3600*24
        const hoursF = Math.floor((sDiffF - restF)/3600)
        restF+= hoursF*3600
        const minutesF = Math.floor((sDiffF - restF)/60)
        restF+= minutesF*60
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
            currentState = getMissionState(dDayDate, endDate)

            const diff = difference()
            if(currentState = "WAITING") {
                try {
                    updateDate(diff)
                    const seconds = document.getElementById("counter-seconds")
                    seconds.classList.remove("counterAnimate")
                    void seconds.offsetWidth
                    seconds.classList.add("counterAnimate")
        
                    const minutes = document.getElementById("counter-minutes")
                    if(minutes.children[0].innerHTML != minutes.children[1].innerHTML) {
                        minutes.classList.remove("counterAnimate")
                        void seconds.offsetWidth
                        minutes.classList.add("counterAnimate")
                    } else {
                        minutes.classList.remove("counterAnimate")
                    }
        
                    const hours = document.getElementById("counter-hours")
                    if(hours.children[0].innerHTML != hours.children[1].innerHTML) {
                        hours.classList.remove("counterAnimate")
                        void seconds.offsetWidth
                        hours.classList.add("counterAnimate")
                    } else {
                        hours.classList.remove("counterAnimate")
                    }
                } catch (e) {

                }
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <div className="MissionStateWrapper">
            <div className="MissionStateTitle">{messageTitle(currentState)}</div>
            <div className="MisssionStateDescription">
                {messageDescription(currentState)}
            </div>
            <a className="MissionStateLink" href="">Śledź balon</a>
        </div>
    )
}

export default MissionState