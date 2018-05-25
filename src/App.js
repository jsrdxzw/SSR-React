import React from 'react'
import Header from "./components/header"
import { hot } from 'react-hot-loader'
import './app.scss'
import 'font-awesome/css/font-awesome.min.css'

const dev = process.env.NODE_ENV === 'development'

class App extends React.Component {

    render() {
        return (
            <div>
                <i className={'fa fa-camera-retro'}/>
                <i className={'fa fa-home fa-fw'}/>
                {/*<Header/>*/}
                <h1>app,hello,</h1>12zsdkassdworld 123 taso me 12xxx,askk  qcwjcnj
            </div>
        )
    }
}

const Root = dev?hot(module)(App):App
export default Root
