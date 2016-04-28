import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
// import { Router, Route, browserHistory, IndexRoute} from "react-router"
import IndexRoute from 'react-router/lib/IndexRoute'
import browserHistory from 'react-router/lib/browserHistory'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'

import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import {StyleRoot} from 'radium';

import AppContainer from "./src/containers/AppContainer.js"
import GameContainer from "./src/containers/GameContainer.js"
import CampaignContainer from "./src/containers/CampaignContainer.js"
import SettingContainer from "./src/containers/SettingContainer.js"
import Menu from "./src/components/Menu.js"
import reducer from "./src/reducers"

let store = createStore(
    
    reducer, 
    
    {},
    
    compose (
        
        applyMiddleware(thunk),
        
        window.devToolsExtension ? window.devToolsExtension() : f => f
        
    )

)

let sign = document.getElementById("sign")

let text = document.getElementById("text")

let parent = document.getElementById("parent")

sign.addEventListener("animationend", startEverything, false)

sign.addEventListener("webkitAnimationEnd", startEverything, false)

sign.style.animation = "swing 1s ease"

sign.style.webkitAnimation = "swing 1s ease"

text.innerHTML = "OPEN"

function startEverything (e) {

    e.preventDefault()
    
    document.body.removeChild(parent)
    
    ReactDOM.render(
        <Provider store={store}>
            <StyleRoot>
                <Router history={browserHistory}>
                    <Route path="/" component={AppContainer}>
                    <IndexRoute component={Menu}/>
                      <Route path="/campaign" component={CampaignContainer} />
                      <Route path="/setting" component={SettingContainer} />
                      <Route path="/game" component={GameContainer} />
                    </Route>
                </Router>
            </StyleRoot>
        </Provider>,
        document.getElementById("root")
    )
}


