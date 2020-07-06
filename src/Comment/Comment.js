import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div>
                <p>{this.props.author}<span className="date">{this.props.date}</span></p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
