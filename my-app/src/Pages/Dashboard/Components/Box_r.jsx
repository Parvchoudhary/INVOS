import React from 'react'
import {RightCard} from './BoxComponents'

export default function BoxR() {
    return (
        <>
            <div className="profile_box"></div>
            <div className="recent_act">
                <h2>Recent Activity</h2>
                <div className="r_box_cont">
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>

                    
                    
                </div>
            </div>

            <div className="up_payments">
                <h2>Upcoming Payments</h2>
                <div className="r_box_cont">
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>
                    <RightCard icon="../Group1.png" title="Transfer  Banks" sub="payment " value="$ 1200"/>

                </div>


            </div>


        </>
    )
}
