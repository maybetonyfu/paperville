import "babel-polyfill"
import React from "react"
import ReactDOM from "react-dom"
// import { Router, Route, browserHistory, IndexRoute} from "react-router"
import IndexRoute from 'react-router/lib/IndexRoute'
import browserHistory from 'react-router/lib/browserHistory'
import Route from 'react-router/lib/Route'
import Router from 'react-router/lib/Router'

import { Provider } from "react-redux"
import { createStore } from "redux"

import AppContainer from "./src/containers/AppContainer.js"
import GameContainer from "./src/containers/GameContainer.js"
import CampaignContainer from "./src/containers/CampaignContainer.js"
import SettingContainer from "./src/containers/SettingContainer.js"
import Menu from "./src/components/Menu.js"
import reducer from "./src/reducers"

let store = createStore(reducer, {}, 
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  
// let store = createStore(reducer)


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={AppContainer}>
            <IndexRoute component={Menu}/>
              <Route path="/campaign" component={CampaignContainer} />
              <Route path="/setting" component={SettingContainer} />
              <Route path="/game" component={GameContainer} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
)
