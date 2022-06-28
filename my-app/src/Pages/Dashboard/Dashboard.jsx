import React from 'react'
import "./Dashboard.css"
import Sidebar from "./Components/Sidebar"
import BoxL from "./Components/Box_l"
import BoxR from "./Components/Box_r"

export default function Dashboard() {
    return (
        <div className="box">
            <Sidebar/>
            <div className="box_l">
                <BoxL/>
            </div>
            <div className="box_r">
                <BoxR/>
            </div>
        </div>
    )
}
