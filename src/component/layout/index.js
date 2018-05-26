import React from 'react'

class Layout extends React.Component {

    render() {
        return (
            <div className={'wrapper'}>
                header
                nav
                {this.props.children}
            </div>
        )
    }
}

export default Layout