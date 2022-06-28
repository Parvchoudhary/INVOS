import React from 'react'
// import InfoBox from "./infoBox"
import {BoxCard, InfoBox} from "./BoxComponents"
import {Line} from 'react-chartjs-2';



// Graph data

const state = {
   labels: ['January', 'February', 'March',
            'April', 'May'],
   datasets: [
     {
       label: 'Rainfall',
       fill: false,
       lineTension: 0.5,
       backgroundColor: 'rgba(75,192,192,1)',
       borderColor: 'rgba(0,0,0,1)',
       borderWidth: 2,
       data: [65, 59, 80, 81, 56]
     }
   ]
 }

////////////////////////
 

export default function BoxL() {
    return (
       <>
        <div className="top_d">
           <h3> Dashboard</h3>
           <div className="info_cont">
              <InfoBox title="Average" time="18H 42M"/>
              <InfoBox title="Average" time="18H 42M"/>
              <InfoBox title="Average" time="18H 42M"/>
           </div>
         
        </div>
        <div className="graph_d">
            <Line
               data={state}
               height={"50%"}
               width={"50%"}
               options={{
                  title:{
                  display:true,
                  text:'Average Rainfall per month',
                  fontSize:20,
                  },
                  maintainAspectRatio: false,
                  legend:{
                  display:true,
                  position:'right'
                  }
               }}
            />
        </div>
        <div className="card_cont">
        <BoxCard source="../Group1.png" info="Transfer Other Banks" value="$ 1200"/>
        <BoxCard source="../Group1.png" info="Transfer Other Banks" value="$ 1200"/>
        <BoxCard source="../Group1.png" info="Transfer Other Banks" value="$ 1200"/>
        <BoxCard source="../Group1.png" info="Transfer Other Banks" value="$ 1200"/>

        </div>
       </>
    )
}