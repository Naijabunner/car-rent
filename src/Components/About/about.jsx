import { useMemo } from "react";
import Rectangle5 from "/src/assets/Rectangle5.jpg"
const About = () => {
    return ( <>
    <section>
        <div className="about_wrapper">
            <div className="about_header">
        <p>About</p>
            </div>
            <div className="about_img_txt">
                <img src={Rectangle5} alt="orange car" className="about_car"/>
                <div className="about_article_wrapper">
                    <article className="about_article">
                We are a specialized team committed to <br />
                 providing reliable car rental services. One of  <br />
                 the advantages of renting a car from us is  <br />
                 offering competitive and transparent prices.  <br />
                 By providing services such as comprehensive  <br />insurance ......
                </article>
                <p className="read_me">
                    Read Me
                </p>
                </div>
                
            </div>
        </div>
    </section>
    </> );
}
 
export default  About;