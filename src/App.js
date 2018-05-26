import React from 'react'
import {hot} from 'react-hot-loader'
import {Route, Switch} from 'react-router-dom'
import Home from "./page/home"
import Layout from "./component/layout"

const dev = process.env.NODE_ENV === 'development'

class App extends React.Component {

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/'} component={Home}/>
                </Switch>
            </Layout>
        )
    }
}

const Root = dev ? hot(module)(App) : App

export default Root
