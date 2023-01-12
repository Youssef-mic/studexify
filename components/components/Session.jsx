function Session({ sessionLengthInMinutes, incrementSessionLengthByOneMinute, decrementSessionLengthByOneMinute }) {
    return ( 
        <div className="ml-16">
            <p>Session: {sessionLengthInMinutes}</p>
            <button onClick={incrementSessionLengthByOneMinute} className="bg-ultradark px-2 rounded-2xl mr-2">+</button>
            <button onClick={decrementSessionLengthByOneMinute} className="bg-ultradark px-2 rounded-2xl">-</button>
        </div>
        
     );
}

export default Session;