import React from 'react'
import frontpic from '../../../images/FrontPic.png';
import card1 from '../../../images/card1.svg';
import card2 from '../../../images/card2.svg';
import card3 from '../../../images/card3.svg';
import arrowB from '../../../images/arrowB.svg';
import arrowW from '../../../images/arrowW.svg';
import {Link} from 'react-router-dom';



export default function Content() {
    return (
        <div className="cp">
            <div className="content_page1">
                <div className="landing_c">
                    <div className="landing_h">
                        <p>Professional Like <br/> investment <span style={{color: "#4978D2",float:"right",}}> &nbsp; portfolio</span> <br/>management.</p>
                    </div>        
                    <div className="landing_img">
                        <img src={frontpic} alt="frontpic" />
                    </div>
                    
                </div>
                <div className="landing_bts">
                    <button className="landing_b">Explore</button>
                    <button className="landing_b"><Link to="/manage" className="mng">Manage</Link></button>
                </div>
            </div>

            <div className="content_page2">
                
                <div className="cp2_h">
                    <h2>Care Features</h2>
                    <br/>
                    <h2 style={{color: "rgba(73, 120, 210, 1)",fontSize:"3rem"}}>Things We Serve</h2>
                </div>
                
                <div className="cards">
                    <div className="cp2_card" style={{background: "#4549AD"}}>
                        <p style={{color: "#fff"}}>Trade Management</p>
                        <img class="cp2_img" src={card1} alt="card1" />
                        <img class="arrow" src={arrowW} alt="arrow" />

                    </div>
                    <div className="cp2_card">
                        <p>Financial Calculator</p>
                        <img class="cp2_img" src={card2} alt="card2" />
                        <img class="arrow" src={arrowB} alt="arrow" />

                    </div>
                    
                    <div className="cp2_card">
                        <p>Investment Portfolio</p>
                        <img class="cp2_img" src={card3} alt="card3" />
                        <img class="arrow" src={arrowB} alt="arrow" />

                    </div>
                </div>
            </div>
        </div>
    )
}
