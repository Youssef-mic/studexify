function Card({ img, header, text, coins }) {
    return ( 
        <div className="rounded-lg shadow-md p-3 text-center w-64 mb-5">
            <img src={img} className="ml-16"/>
            <h1 className="text-2xl">{header}</h1>
            <p>{text}</p>
            <p className="text-coins">{coins}$</p>
        </div> 
    );
}

export default Card;