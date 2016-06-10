import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"

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
import MenuContainer from "./src/containers/MenuContainer.js"
import reducer from "./src/reducers"

import { fetchLevels } from "./src/actions"

let store = createStore(
    
    reducer, 
    
    {},
    
    compose (
        
        applyMiddleware(thunk),
        
        window.devToolsExtension ? window.devToolsExtension() : f => f
        
    )

)

store.dispatch(fetchLevels())



ReactDOM.render(
    <Provider store={store}>
        <StyleRoot>
            <Router history={browserHistory}>
                <Route path="/" component={AppContainer}>
                <IndexRoute component={MenuContainer}/>
                  <Route path="/campaign" component={CampaignContainer} />
                  <Route path="/setting" component={SettingContainer} />
                  <Route path="/game" component={GameContainer} />
                </Route>
            </Router>
        </StyleRoot>
    </Provider>,
    document.getElementById("root")
)

let loading = document.getElementById("loading")

document.body.removeChild(loading)

