function Break({ breakLengthInMinutes,incrementBreakLengthByOneMinute,decrementBreakLengthByOneMinute }) {
    
    return ( 
        <div className="ml-40">
            <p>Break: {breakLengthInMinutes}</p>
            <button onClick={incrementBreakLengthByOneMinute} className="bg-ultradark px-2 rounded-2xl mr-2">+</button>
            <button onClick={decrementBreakLengthByOneMinute} className="bg-ultradark px-2 rounded-2xl">-</button>
        </div>
        
     );
}

export default Break;