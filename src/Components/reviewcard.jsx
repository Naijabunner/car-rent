const Reviewcards = (props) => {
    return ( <>
    <div className="reviewCard_wrapper">
        <img src={props.img} alt="" />
        <h4>{props.name}</h4>
        <article>{props.comment}</article>
    </div>
    </> );
}
 
export default Reviewcards;