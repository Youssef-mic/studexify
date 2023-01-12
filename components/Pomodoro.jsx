import { useState } from "react";
import Break from "./components/Break";
import Session from "./components/Session";
import TimeLeft from "./components/TimeLeft";
import moment from "moment/moment";

function Pomodoro({ setCoins }) {
    const [sessionLength, setSessionLength] = useState(60 * 25);
    const decrementSessionLengthByOneMinute = () => {
        const newSessionLength = sessionLength - 60;
        if (newSessionLength <= 0) {
            setSessionLength(60);
        } else {
            setSessionLength(newSessionLength);
        }
    };
    const incrementSessionLengthByOneMinute = () => {
        setSessionLength(sessionLength + 60);
    };
    const sessionLengthInMinutes = moment.duration (sessionLength, 's').minutes()
    const [breakLength, setBreakLength] = useState(300);
    const decrementBreakLengthByOneMinute = () => {
        const newBreakLength = breakLength - 60;
        if (newBreakLength < 0) {
            setBreakLength(0);
        } else {
            setBreakLength(newBreakLength);
        }
    };
    const incrementBreakLengthByOneMinute = () => {
        setBreakLength(breakLength + 60);
    };
    const breakLengthInMinutes = moment.duration (breakLength, 's').minutes()
    
    return ( 
        <>
            <div className="flex mt-5 text-center">
            <Break
            breakLengthInMinutes={breakLengthInMinutes}
            decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
            incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
            />
            <Session
            decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
            incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
            sessionLengthInMinutes={sessionLengthInMinutes}
            />
            </div>
            
            <TimeLeft
            sessionLength={sessionLength}
            breakLength={breakLength}
            setCoins={setCoins}
            />
        </>
     );
}

export default Pomodoro;