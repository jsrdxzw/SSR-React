import React from 'react'
import user from '../images/user.png'
import Other from '../images/1.jpg'

export default class Header extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <img src={user} alt=""/>
                    <img src={Other} alt=""/>
                    bar
                </header>
            </div>
        )
    }
}