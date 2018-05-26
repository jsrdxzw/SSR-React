import React from 'react'
import NavTop from "../nav-top"
import NavSide from "../nav-side"

class Layout extends React.Component {

    render() {
        return (
            <div className={'wrapper'} id={'wrapper'}>
                <NavTop/>
                <NavSide/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout