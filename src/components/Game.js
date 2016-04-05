import React, { PropTypes } from "react"
// import { Link } from "react-router"
import Radium from 'radium'
// import Modal from "react-modal"

import ProgressContainer from "../containers/ProgressContainer"
import BoardContainer from "../containers/BoardContainer"

import WinModal from "../components/WinModal"
import LostModal from "../components/LostModal"

const Game = Radium(({game, measurements}) => (
    <div style={GameStyle}>
        <ProgressContainer />
        
        <BoardContainer />
        
        <WinModal
            modalOpen={game.status==="WIN"}
            measurements={measurements}
            />
            
        <LostModal
            modalOpen={game.status==="LOSE"}
            measurements={measurements}
            />

        
    </div>
))


let GameStyle = {
    width: "100%",
    height: "100%"
}

export default Game