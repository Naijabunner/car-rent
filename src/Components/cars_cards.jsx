const Carscards = (props) => {
    return (
        <div className="carCards_wrapper">
            <div className="inner_carcards_wrapper">
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
                <div className="Icons_desc">

                </div>
                <div className="dailyrate_wrapper">
                        <div className="daily_rate_txt">
                            <p>Daily rate from</p>
                            <h4>{"$" + props.price}</h4>
                        </div>
                    <button>Book Now</button>
                </div>

            </div>
        </div>
      );
}
 
export default Carscards;