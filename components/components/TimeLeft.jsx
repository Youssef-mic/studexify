import moment from "moment/moment";
import momentDurationFormatSetup from "moment-duration-format";
import { useEffect, useState } from "react";
momentDurationFormatSetup(moment)
function TimeLeft({ sessionLength, setCoins, breakLength }) {
    const [timeLeft, setTimeLeft] = useState(sessionLength);
    const [intervalID, setIntervalID] = useState(null)
    const [currentSession, setCurrentSession] = useState('Session')
    const formattedTimeLeft = moment.duration (timeLeft, 's').format('mm:ss', {trim: false})
    const isStarted = intervalID != null
    function startStop() {
        if (isStarted) {
            clearInterval(intervalID)
            setIntervalID(null)
        } else {
            const newIntervalID = setInterval(() => {
                setTimeLeft (prevTimeLeft => {
                  const newTimeLeft = prevTimeLeft - 1
                  if (newTimeLeft >= 0) {
                    return prevTimeLeft - 1
                  }
                  if (currentSession === 'Session') {
                      setCurrentSession('Session');
                      setTimeLeft(sessionLength);
                  }
                  else if (currentSession === 'Break'){
                      setCurrentSession('Break');
                      setTimeLeft (breakLength);
                  }
                });
              }, 1000);
              setIntervalID(newIntervalID);
        }
        
    }
    useEffect(() =>{
        if (timeLeft === 0 && currentSession === 'Session') {
            setCoins(prev => prev + 10)
        }}
    ,[timeLeft])
    
    useEffect(() => {
        setTimeLeft(sessionLength)
    },[sessionLength])
    return ( 
        <div className="ml-24 text-center p-5">
            <h2 className="text-3xl">{currentSession} <br/> </h2>
            <h1 className="text-5xl">{formattedTimeLeft}</h1> <br />
            <button className="bg-ultradark rounded-2xl p-3 py-2 text-lg mb-3" onClick={startStop}>{isStarted ? "Stop" : "Start"}</button> <hr />
        </div>
     );
}

export default TimeLeft;