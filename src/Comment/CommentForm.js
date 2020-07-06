import React, { Component } from 'react'

export default class CommentForm extends Component {
    render() {
        return (
            <div className="addform">
                <textarea name="txtContent" id="txtContent" col="20" rows="10"></textarea>
                <br />
                <button>提交</button>
            </div>
        )
    }
}
